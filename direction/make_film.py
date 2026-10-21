from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np, subprocess, math, wave, json
from pathlib import Path
P=Path('/workspace/direction-film'); W,H=1280,720; FPS=30
font='/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc'
def f(n): return ImageFont.truetype(font,n)
y,x=np.mgrid[0:H,0:W]; radial=np.exp(-(((x-680)/800)**2+((y-300)/500)**2)*2)
bg=np.zeros((H,W,3),dtype=np.uint8)
for c in range(3): bg[:,:,c]=13+radial*15
base=Image.fromarray(bg)
def smooth(v): v=max(0,min(1,v)); return v*v*(3-2*v)
def pos(p,t):
    X,Y=p
    if t<8:
        u=t/8; return (W*.5+(X-(u*7-4))*100, H*.49+Y*100)
    if t<14:
        return (W*.50+X*105+Y*38, H*.48+Y*57-X*12)
    if t<25:
        u=(t-14)/11; return (W*.44+(X-u*6)*91+Y*22,H*.44+Y*42-X*5)
    z=1-.05*smooth((t-25)/4)
    return (W*.48+(X-7)*70*z+Y*25*z,H*.44+Y*52*z-X*2*z)
def line(d,pts,t,col,width): d.line([pos(p,t) for p in pts],fill=col,width=width,joint='curve')
def point_at(t):
    if t<8:return (-4+7*t/8,0)
    if t<14:
        u=t-8
        if u<.5:return (0,0)
        if u<1:return (0,0)
        a=smooth((u-1)/5); return (3*a,-2*a)
    if t<25:
        u=(t-14)/11;return (3+6*(.8*u+.2*u*u),-2)
    return (9+1.1*smooth((t-25)/1.8),-2)
paths=[[(-30,0),(0,0),(20,0)],[(0,0),(.3,-.05),(.7,-.25),(1.2,-.65),(2,-1.35),(3,-2),(10,-2)]]
cmd=['ffmpeg','-y','-v','error','-f','rawvideo','-pix_fmt','rgb24','-s',f'{W}x{H}','-r','30','-i','-','-an','-c:v','libx264','-preset','fast','-crf','18','-pix_fmt','yuv420p',str(P/'silent.mp4')]
proc=subprocess.Popen(cmd,stdin=subprocess.PIPE)
for i in range(900):
    t=i/30; im=base.copy(); d=ImageDraw.Draw(im)
    for path in paths:line(d,path,t,(62,63,62),2)
    if t>=25:
        # Open luminous form, a quiet destination with no UI or symbols.
        arc=[(10+1.15*math.cos(a),-2+.95*math.sin(a)) for a in np.linspace(-2.4,2.4,100)]
        line(d,arc,t,(125,121,108),2)
    p=point_at(t); glow=Image.new('RGB',(W,H)); gd=ImageDraw.Draw(glow)
    tail=[]
    for dt in np.linspace(.7,0,25):tail.append(pos(point_at(max((0 if t<8 else 8 if t<14 else 14 if t<25 else 25),t-dt)),t))
    if len(tail)>1:gd.line(tail,fill=(130,117,86),width=6)
    px,py=pos(p,t); gd.ellipse((px-7,py-4,px+7,py+4),fill=(235,222,184))
    import PIL.ImageChops
    im=PIL.ImageChops.add(im,glow.filter(ImageFilter.GaussianBlur(16)))
    im=PIL.ImageChops.add(im,glow.filter(ImageFilter.GaussianBlur(5)))
    d=ImageDraw.Draw(im);d.ellipse((px-5,py-2,px+5,py+2),fill=(255,246,219))
    # All type is composited in post-production.
    if t>=25:
        opacity=smooth((t-25)/.3)
        label='主动ETF：ETF的便利 + 主动管理的判断'
        if t<28:d.text((W/2,550),label,font=f(31),fill=(int(237*opacity),)*3,anchor='mm')
        d.rounded_rectangle((100,634,1180,697),radius=8,fill=(15,16,17))
        d.text((W/2,665),'主动管理不保证一定产生超额收益，投资有风险。',font=f(29),fill=(245,240,229),anchor='mm')
    fade=min(1,t/0.7)
    if fade<1: im=Image.blend(Image.new('RGB',(W,H),(12,13,14)),im,fade)
    proc.stdin.write(im.tobytes())
    if i%150==0:print(f'render {i}/900',flush=True)
    if i in (120,300,570,810): im.save(P/f'frame-{i}.jpg')
proc.stdin.close(); assert proc.wait()==0
sr=48000; ts=np.arange(sr*30)/sr
amp=.016*np.minimum(1,ts/2)*np.minimum(1,(30-ts)/2)
a=amp*(np.sin(2*np.pi*65*ts)+.35*np.sin(2*np.pi*98*ts))
for onset,freq,vol,decay in [(9,340,.055,25),(25,392,.035,3)]:
    u=np.maximum(0,ts-onset);a+=vol*np.sin(2*np.pi*freq*u)*np.exp(-decay*u)*(ts>=onset)*(1-np.exp(-100*u))
with wave.open(str(P/'sound.wav'),'wb') as out:out.setnchannels(1);out.setsampwidth(2);out.setframerate(sr);out.writeframes((np.clip(a,-1,1)*32767).astype('<i2').tobytes())
print('render complete',flush=True)
