/*         _.-::-._
    '-..-'|   ||   |                       __ _
    '-..-'|_.-;;-._| \   /_o_  __/_     __(_/(_) \   / _  /  ___o_/ _
    '-..-'|   ||   |  \)/ // )(_/(_)\))_)  /(_) o \)/ (-'/_)_) / /¯(-'
    '-..-'|_.-''-._|                                   ¯            ¯
*/
(_=>{
	const apps=[
		"app-adraw",
		"app-aohell",
		"app-bo2k",
		"app-calc",
		"app-calendar",
		"app-dos",
		"app-dreamweaver",
		"app-explorer",
		"app-ft2",
		"app-help",
		"app-mycpu",
		"app-nero",
		"app-notepad",
		"app-photoshop",
		"app-putty",
		"app-recovery",
		"app-regedit",
		"app-solitaire",
		"app-sub7",
		"app-toneloc",
		"app-trash",
		"app-utorrent",
		"app-vb6",
		"app-vstudio",
		"app-winamp",
		"app-winnuke",
		"app-wsftp",
		"app-xircon",
	],
	E={
		c: "click",
		d: "dblclick",
		o: "mouseover",
		u: "mouseout",
		m: "mousedown",
		p: "mouseup",
		v: "mousemove",
		x: "contextmenu",
		k: "keydown",
		U: "keyup",
		s: "submit",
		P: "pointerdown",
		V: "pointermove",
		K: "pointerup",
		l: "pointerleave",
		i: "input",
	},
	errs=['Access denied','Attempt to remove the current directory','Attempt to write on write-protected diskette','Bad request structure length','Cannot make directory entry','Data error (CRC)','Drive not ready','Duplicate name on network','Duplicate redirection','FCB unavailable','Fail on INT 24H','File already exists','File not found','General failure','Incompatible remote adapter','Incorrect response from network','Insufficient memory','Invalid access code','Invalid data','Invalid disk change','Invalid drive was specified','Invalid environment','Invalid format','Invalid function number','Invalid handle.','Invalid memory block address','Invalid parameter','Invalid password','Lock violation','Memory control blocks destroyed','Network BIOS command limit exceeded','Network BIOS session limit exceeded','Network adapter hardware error','Network busy','Network device fault','Network device no longer exists','Network device type incorrect','Network name deleted','Network name limit exceeded','Network name not found','Network request not accepted','Network request not supported','No more files','Not enough space for print file','Not same device','Path not found','Print file deleted (not enough space)','Print of disk redirection paused','Print queue full.','Printer out of paper','Read fault','Remote computer not listening','Reserved','Sector not found','Seek Error','Sharing buffer overflow','Sharing violation','Temporarily paused','Too many open files','Too may redirection','Unexpected network error','Unknown command','Unknown media type','Unknown unit','Write fault'],
	fatals=['Error 0D : 0157 : 0xAC1D0000-HEX {Q307908}','Exception 0D at VXD VMM(0H)+00005B01 0028:HEX','Exception 0E Access Violation in Module WMAD.EXE at HEX {Q312931}','Exception 0E at 0028:HEX in VXD called from 0028:C001d188 in VXDNDIS','Exception 0E at 0028:HEX in VXD VMM {Q253241}','Exception 0E at 0028:HEX in VXD IFSMGR','Exception 0E at 0028:HEX in VxD WSIPX(01)... called from 0028:C0043174 in VxD NDIS(01) {Q192445}','Exception 0E at 0xAC1D0000:HEX in VxD IFSMGR {Q153598}','Exception 0E... called from 0028:HEX in VxD NDIS {Q283043}','Fatal 0D has occurred at 0028:HEX or 0246:013F47FB','Fatal Exception 06 Has Occurred at 0xAC1D0000+HEX','Fatal Exception 06 at 0028:HEX in VXD VMM (06)','Fatal Exception 0E 0028:HEX in VXD VCACHE(01)','Fatal Exception 0E 06 at 0028: HEX ','Fatal Exception 0E at 0028:HEX in VXD SYMEvent','Fatal Exception 0E at 0028:HEX in VXD VREDIR','Fatal Exception 0E at 0028:HEX in VXD IFSMGR','Fatal Exception 0E at 0028:HEX in VXD IOS (04)','Fatal Exception 0E at 0028:HEX in VXD VSERVER','Fatal Exception 0E at 0028:HEX in VXD IFSMGR(01)','Fatal Exception 0E at 0028:HEX in VXD VWIN32','Fatal Exception 0E at 0028:HEX in VXD Emu10k1','Fatal Exception 0E at 0028:HEX in VXD IOS','Fatal Exception 0E at 0028:HEX in VXD IOS (01)','Fatal Exception 0E at 0028:HEX in VXD VMM (06)','Fatal Exception 0E at 0157:BFF9A25B + 0xAC1D0000:HEX','Fatal Exception 0E at HEX in VXD VWIN32','Fatal Exception 0E at 0xAC1D0000:HEX in VxD SCSI1HLP {Q250005}','Fatal Exception 0E in 0xAC1D0000:HEX VPOWERD','Fatal Exception 0E in 0xAC1D0000:HEX VXD IFSMGR','Fatal Exception in 0xAC1D0000:HEX CDVSD Starting','Fatal Exception in 0xAC1D0000:HEX VXD VMM','Fatal exception at 0028:HEX in VxD WSIPX(01) {Q192445}','MPREXE caused an exception 03h at HEX in module USER32.DLL','MSIMN caused an exception C0000006h+HEX in module DIRECTDB.DLL','MSTASK caused an exception 03h at HEX in module USER32.DLL','Program Has Caused a Fatal Exception 0D at 00457:HEX & Will Be Terminated','RUNDLL32 caused an exception 03h at HEX in module USER32.DLL','SCANDSKW caused Fatal exception 03h at HEX in module USER32.DLL','STATEMGR caused an exception 03h at HEXin module USER32.DLL','USR32.EXE caused an exception 03h at HEX in module USER32.DLL'],
	neterrs=['The server\'s host key is not cached in the registry','WARNING - POTENTIAL SECURITY BREACH!','SSH protocol version 2 required by our configuration but server only provides (old, insecure) SSH-1','The first cipher supported by the server is ... below the configured warning threshold','Server sent disconnect message type 2 (protocol error): "Too many authentication failures for root"','Out of memory','Internal error','Internal fault','Assertion failed','Unable to use this private key file, "Couldn\'t load private key: Key is of wrong type','Server refused our public key’ or ‘Key refused','Access denied: Authentication refused','No supported authentication methods available','Incorrect CRC received on packet’ or ‘Incorrect MAC received on packet','Incoming packet was garbled on decryption','PuTTY X11 proxy: various errors','Network error: Software caused connection abort','Network error: Connection reset by peer','Network error: Connection refused','Network error: Connection timed out','Network error: Cannot assign requested address'],
	$=e=>document.getElementById(e),
	$$=e=>document.querySelector(e),
	$$$=i=>document.querySelectorAll(i),
	make=i=>{return document.createElement(i)},
	on=(x,e,r,o=!1)=>{(x=typeof x=="string"?$(x):x).addEventListener(e,r,o),eyes.push({e:x,t:e,l:r,o})},
	off=(x,e,r,o=!1)=>{try{(x=typeof x=="string"?$(x):x).removeEventListener(e,r,o)}catch{};try{eyes.splice(eyes.indexOf(eyes.find(l=>l.e===x&&l.t===e&&l.l===r&&l.o===o)),1)}catch{}},
	cl=(e,c,i=0)=>e.classList[i?'remove':'add'](c),
	p0p=e=>{e.preventDefault();e.stopPropagation()},
	muted=_=>{return $("mute").checked},
	sound=i=>{if(muted()) return;
		let a=new Audio('/ui/s/'+i+'.mp3');a.play().catch(_=>{});return a},
	w8=i=>document.body.style.cursor=i?'':'wait',
	hg=i=>cl($("wait"),"hide",!i),
	hv=_=>cl($("app-volume"),"app-hidden"),
	shutdown=_=>{
		canvas.style.display="none";
		eyes.forEach(({e,t,l,o})=>{e.removeEventListener(t,l,o)});
		tasks=[];
		eyes=[];
		unselect();
		tsync();
		dp.style.display="none";
		msg({x:1});
		$("dialogBody").innerHTML="";
		$("poweroff").style.display="none";
		if(v)t(fe);
		[...$$$('#desktop article'),$('taskbar'),$('windows')].forEach(i=>i.style.visibility="hidden");
		apps.concat("trashwin","cdc","jm").forEach(a=>cl($(a),"app-hidden"))
		tn.src="/ui/i/tray-disconnected.png"},
	msg=({x,m,t,i,s,o,c}={})=>{
		let D=$("msg");
		if(x){D.close();return}
		if(s)sound("chord");
		$("dialogBody").innerHTML=m;
		$("dialogTitle").innerHTML=`<img src="/ui/i/${i||"windows-slanted"}.png"><sup>${t||"Windows98"}</sup>`;
		D.showModal();
		o?.();
		$$$('#msg .close').forEach(i=>on(i,E.c,e=>(c?.(e),D.close())))},
	fe={preventDefault:_=>{},stopPropagation:_=>{}},
	sm=$("startmenu").style,
	fo=$("flyout"),
	ts=$("tooltip"),
	tn=$("traynet"),
	p=$('pscolors'),
	dp=$("dosprompt"),
	startmenu=Array.from($$$("#startmenu .menu")),
	canvas=$("glitch"),
	tclock=$("clock"),
	img=new Image();img.src="https://www.windows98.website/ui/i/ie.png",
	showdesktop=_=>{
		let any=tasks.some(i=>i.f);
		tasks.forEach(i=>(i.h=any?1:0,i.f=0,cl($("app-"+i.e),"app-hidden",any?0:1)));
		!any&&tasks.length&&tfocus(tasks[tasks.length-1].e);
		tsync()},
	titlebar=(e,d,cb)=>{
		let W=$("app-"+e),H=W.querySelector("header,h2"),T=$$('#tasks > section[name="'+e+'"]'),[A,B]=d?[T,H]:[H,T],R=x=>x.getBoundingClientRect(),
		[S1,S2]=[R(A),R(B)],D=make("div");
		D.id="minani";
		Object.assign(D.style,{left:S1.left+"px",top:S1.top+"px",width:S1.width+"px",height:S1.height+"px",position:"fixed",zIndex:2e3});
		D.innerHTML=H.innerHTML;
		document.body.appendChild(D);
		D.animate([
			{left:S1.left+"px",top:S1.top+"px",width:S1.width+"px",height:S1.height+"px",opacity:1},
			{left:S2.left+"px",top:S2.top+"px",width:S2.width+"px",height:S2.height+"px",opacity:.3}
		],{duration:500,easing:"ease"}).onfinish=_=>(D.remove(),cb&&cb())},
	tmin=e=>{
		let W=$("app-"+e);
		titlebar(e,0,_=>{cl(W,"app-hidden");tasks.find(t=>t.e===e&&(Object.assign(t,{h:1,f:0}),tsync()))})},
	tmax=e=>{
		let W=$("app-"+e),S={zIndex:55,visibility:"visible"};
		W.classList.contains("app-hidden")
			?titlebar(e,1,_=>(cl(W,"app-hidden",1),Object.assign(W.style,S)))
			:(cl(W,"app-hidden",1),Object.assign(W.style,S))},
	tclose=e=>{
		let I=tasks.findIndex(t=>t.e===e);
		if(I+1) {
			tasks.splice(I,1);
			tasks.length?tfocus(tasks.at(-1).e):tsync();
			(e!="dialup"&&e!="ie")&&($("app-"+e).style.visibility="hidden")}},
	tfocus=e=>{
		let Q=tasks.find(t=>t.e===e);
		tasks.forEach(i=>i.f=i.e===e);
		tsync();
		apps.forEach(a=>($(a).style.zIndex=50,cl($(a),"inactive",a==="app-"+e)));
		if(Q){
			Q.h=0;
			(e!="dialup"&&e!="ie")&&tmax(e);
			e==="dos"&&promptfocus($("dinput"))}},
	topen=e=>{
		!tasks.some(task=>task.e===e)&&
			tasks.push({e,f:1,h:0,i: '/ui/i/'+(
				e==="adraw"?'msdos.png"><sup>ACiDDraw - MS-DOS':
				e==="aohell"?'aohell.png"><sup>AOHell 95 v3.0 B5':
				e==="bo2k"?'bo2k-server.png"><sup>Back Orifice 2000':
				e==="calc"?'calc.png"><sup>Calculator':
				e==="calendar"?'calendar.png"><sup>Windows Calendar':
				e==="dialup"?'modem.png"><sup>Windows98 - Dial Up':
				e==="dos"?'msdos.png"><sup>Command Prompt':
				e==="dreamweaver"?'dreamweaver.png"><sup>Untitled-1 - Dreamweaver':
				e==="explorer"?'explorer-ico.png"><sup>My Documents':
				e==="ft2"?'msdos.png"><sup>FastTracker II - MS-DOS':
				e==="help"?'help-ico.png"><sup>Windows Help':
				e==="ie"?'msie.png"><sup>Internet Exploder':
				e==="mycpu"?'mycpu.png"><sup>My Computer':
				e==="nero"?'nero.png"><sup>Nero Burning Rom':
				e==="notepad"?'notepad.png"><sup>Todo.txt - Notepad':
				e==="photoshop"?'photoshop.png"><sup>Untitled-1 - Photoshop':
				e==="putty"?'putty.png"><sup>PuTTY 0.68':
				e==="recovery"?'windows-slanted.png"><sup>Windows98 Recovery':
				e==="regedit"?'regedit.png"><sup>Registry Editor':
				e==="solitaire"?'solitaire.png"><sup>Solitaire':
				e==="sub7"?'sub7.png"><sup>SubSeven v2.2 by mobman':
				e==="toneloc"?'msdos.png"><sup>Finished - TONELOC':
				e==="trash"?'trash.png"><sup>Recycle Bin':
				e==="utorrent"?'utorrent.png"><sup>µtorrent v1.3':
				e==="vb6"?'vb6.png"><sup>Visual Basic v6.0':
				e==="vstudio"?'vstudio.png"><sup>test.cpp - Microsoft Visual Studio C++':
				e==="winamp"?'winamp.png"><sup>WinAmp':
				e==="winnuke"?'nuke.png"><sup>WinNukeV95':
				e==="wsftp"?'ws_ftp.png"><sup>WS_FTP95 Pro':
				e==="xircon"?'xircon.png"><sup>syntax(IRC) undernet #SIN':
			'')});tfocus(e)}
	tsync=_=>{
		$("tasks").innerHTML=tasks.map(task=>`<section name="${task.e}" class="task${task.f==1?' selected':''}"><img src="${task.i}</sup></section>`).join("");
		$$$("#tasks .task").forEach(i=>on(i,E.c,e=>tfocus(e.currentTarget.getAttribute("name"))));
		hv()},
	tdrag=(e,app,Xo,Yo)=>{
		p0p(e);hv();
		(e!="dialup"&&e!="ie")&&tfocus(app);
		let A=e.target.parentElement,
			L=e.clientX-A.getBoundingClientRect().left,
			T=e.clientY-A.getBoundingClientRect().top,
			M=ee=>Object.assign($("app-"+app).style,{left:ee.pageX-L+Xo+"px",top:ee.pageY-T+Yo+"px"}),
			U=_=>(off(document,E.v,M),off(document,E.p,U));
		on(document,E.v,M);on(document,E.p,U)},
	foo=i=>{fo.style.visibility=(!i)?"hidden":"visible"},
	t=e=>{
		p0p(e);hidectx();foo(0);hv();
		sm.visibility=(v=!v)?"visible":"hidden";
		$("start").classList.toggle("pressed");
		if(v){
			popt=0;
			menus=startmenu;
			fop=startmenu.length-1;
			menus[fop].focus()}},
	n=e=>{
		apps.forEach(a=>cl($(a),"app-hidden"));
		["BSOD","boot","windows"].forEach(i=>{$(i).style.visibility="hidden"});
		tracker(1);
		msg({x:1});
		$(e).style.visibility="visible";
		e=="boot"?boot():e=="windows"?windows():e=="poweroff"?poweroff():bsod()},
	tip=e=>{
		Object.assign(ts.style,{left:e.target.getBoundingClientRect().left-100+"px",display:"block",opacity:1}),
		ts.innerHTML=e.target.alt,
		setTimeout(_=>Object.assign(ts.style,{display:"none",opacity:0}),5e3)},
	noesc=_=>on(document,E.k,e=>{if(e.key==="Escape")n("BSOD")}),
	showctx=(i,e,xo,yo)=>Object.assign($(i).style,{display:"block",left:e.clientX+xo+"px",top:e.clientY+yo+"px"}),
	hidectx=_=>["appmenu","desktopmenu"].forEach(i=>{$(i).style.display="none"}),
	unselect=_=>{[
			...$$$('#desktop article'),
			...$$$('#app-mycpu .ico'),
			...$$$('#app-explorer .ico')
		].forEach(i=>cl(i,"selected",1));
			hidectx(),hv()},
	time=_=>{
		cal($('cal'));
		setInterval(_=>{
			let now=new Date();
			tclock.innerHTML=`&nbsp;${now.getHours()%12||12}<span class=blink>:</span>${now.getMinutes().toString().padStart(2,0)} ${now.getHours()>=12?"PM":"AM"}`
		},6000)},
	eject=_=>{try{let c=0,col=Player.cdromCollection;while(c<col.count)col.item(c++).eject()}catch{}},
	closeAll=(sel,fn)=>$$$(sel+" .close").forEach(b=>on(b,E.c,fn)),
	run=(a,{i,h,o,c,m,d,b,x}={})=>{
		const fn=e=>{
			topen(a);
			if(d)on($(a+"title"),E.m,e=>tdrag(e,a,d.x,d.y));
			$(a+"exit")&&c!==false&&on(a+"exit",E.c,e=>(p0p(e),tclose(a),typeof c=="function"&&c()));
			$(a+"min")&&m!==false&&on(a+"min",E.c,e=>(p0p(e),tmin(a),typeof m=="function"&&m()));
			if($(a+"body")&&b!==false)on(a+"body",E.c,_=>n("BSOD"));
			else on("app-"+a,E.c,_=>tfocus(a));
			o?.(e);x?.(e)};
		if(i!==false)on(a,E.c,e=>(p0p(e),unselect(),cl($(a),"selected")));
		h===false?fn():on(a,typeof h=="string"?h:E.d,fn)},
	ico=(a,d)=>{
		$$$(a+' .ico').forEach(i=>{
			on(i,E.c,e=>(p0p(e),unselect(),cl(i,"selected")));
			on(i,E.d,d)})},
	cdrom=_=>msg({
		m:'<div class=pad><aside><img width=27 height=29 src=/ui/i/insert-cd.gif></aside><section>Error reading drive E:\\</p><p>Please insert a CD ROM and try again</p><section class=field-row><button class=close>Eject</button></section></div>',
		c:eject,
		s:1}),
	floppy=_=>msg({
		m:'<div class=pad><aside><img style="transform:scale(1)" width=38 height=43 src=/ui/i/insert-floppy.png></aside><section>A:\\ is not accessible.</p><p>The device is not ready.</section><section class=field-row><button tabIndex=1 class="close focused">OK</button></section></div>',
		c:_=>n("BSOD"),
		s:1}),
	alttab=$("alttab"),
	taskinfo=task=>{
		let img,title='';
		img=`<img src="${task.i.replace(/"><sup>.*/, '')}">`;
		title=(task.i.match(/<sup>(.*)/)||[])[1]||task.e.replace(/^app-/, '');
		if(!title)title=task.e.replace(/^app-/,'');
		return {img,title}},
	showAT=_=>{
		if(v)t(fe);
		if(!tasks.length)return;
		let iconRow=tasks.map((t,i)=>{
			const {img}=taskinfo(t);
			return `<section name="${t.e}" class="alttab-task${i===ati?' selected':''}">${img}</section>`;
		}).join('');
		const selTask=tasks[ati];
		const {title}=taskinfo(selTask);
		let titleRow=`<div class="alttab-task-title"><sup>${title}</sup></div>`;
		alttab.querySelector('.icons').innerHTML=iconRow;
		alttab.querySelector('.title').innerHTML=titleRow;
		cl(alttab,"off",1)},
	fs=e=>{let d=document,b=d.body;foo(0);t(e);d.fullscreenElement?d.exitFullscreen():b.requestFullscreen()},
	crt=e=>{foo(0);t(e);$$$('.oo').forEach(e=>cl(e,'hide',e.classList.contains('hide')))},
	foh=i=>["fs","crt"].map((k,j)=>(i?on:off)(k,E.c,[fs,crt][j])),
	startmore=e=>{
		const r=e.currentTarget.getBoundingClientRect();
		p0p(e);foo(1);
		e.currentTarget.getAttribute("name")==="start"?
			Object.assign(fo.style,{padding:"10px",height:"52px",top:r.top+"px",left:r.left+r.width-22+"px"}):
			Object.assign(fo.style,{padding:"8px 20px",height:"43px",top:r.top-5+"px",left:r.left+r.width-17+"px"});
		switch(e.currentTarget.getAttribute("id")){
			case "progs":
				(fo.innerHTML='<ul><li><a class=about>This website is by:</a></li><li><a class=x0 href="https://x-e.ro" target=_blank>xero harrison</a></li><li><a class=sauce href="https://github.com/xero/windows98.website" target=_blank>view the source code</a></li></ul>',
					Object.assign(fo.style,{color:"#000",textShadow:"none",height:"auto",width:"auto",padding:"0"}),
					foh())
				break;
			case "favs":
				(fo.innerHTML=`<ul>
					<li><a class=metroid target=_blank href="https://x-e.ro">https://x-e.ro</a></li>
					<li><a class=paint target=_blank href="https://0w.nz">https://0w.nz</a></li>
					<li><a class=tv target=_blank href="https://un.kn.0w.nz">https://un.kn.0w.nz</a></li>
					<li><a class=wmp target=_blank href="https://xero.style">https://xero.style</a></li>
					<li><a class=tools target=_blank href="https://2133740.xyz">https://2133740.xyz</a></li>
					<li><a target=_blank href="https://github.com/xero">https://github.com/xero</a></li>
					<li><a target=_blank href="https://haunted.computer/@xero">https://haunted.computer/@xero</a></li>
					</ul>`,
					Object.assign(fo.style,{color:"#000081",textShadow:"none",height:"auto",width:"auto",padding:"0"}),
					foh())
				break;
			case "settings":
				(fo.innerHTML='<ul><li id=fs><a class=fs>Toggle Full Screen</a></li><li id=crt><a class=crt>Toggle CRT Effects</a></li></ul>',
					Object.assign(fo.style,{color:"#000",textShadow:"none",height:"auto",width:"auto",padding:"0"}),
					foh(1))
				break;
			default:
				(fo.innerHTML='<ul><li class=disabled><a class=disabled>(None)</a></li></ul>',
					Object.assign(fo.style,{height:"auto",width:"auto",padding:"0"}),
					foh())
				break;
		}
		$$$("#flyout a").forEach(e=>e.tabIndex=0)},
	chatani=_=>{
		const S=$("xirconstatus"),C=$("xirconchat"),ST=$("xirconstatustask"),CT=$("xirconchattask"),X=$("xirconprompt");
		let sp=1300,l=0,k=0;
		S.querySelector(".client").querySelectorAll(".kick").forEach(e=>e.remove());
		C.querySelector(".client").querySelectorAll(".usrmsg").forEach(e=>e.remove());
		[S,C].forEach(e=>e.style.zIndex=60);
		function anim(p,cb){
			let i=0,cl=p.querySelector(".client"),L=cl.innerHTML.split(/<br\s*\/?>/i).map(l=>l.trim()).filter(Boolean);
			cl.innerHTML="";
			(function nx(){
				if(i<L.length){
					cl.innerHTML+=L[i]+(i<L.length-1?"<br>":"");
					cl.scrollTop=cl.scrollHeight;
					i++;
					if(!l){
						if(i==3)sp=150;
						if(i==5)sp=800;
						if(i==6)sp=150;
						if(i==44)sp=800;
						if(i==45)sp=150;
						if(i==53)sp=800;
						if(i==54)sp=999;
						if(i==56)sp=400;
						if(i==65)sp=123;
					}
					if(l==1){
						if(i==16)sp=2500;
						if(i==17)sp=1500;
            if(i>18){
              sp+=Math.random()*400;
              promptfocus(X)}}
					setTimeout(nx,sp);
				}else cb&&cb()
			})()}
		const h=e=>{
			p0p(e);
			let x=S.querySelector(".client"),y=C.querySelector(".client");
			y.innerHTML+=`<span class=usrmsg><span class=c>&lt;</span><span class=l>x0</span><span class=c>&gt;</span> ${X.value}<br></span>`;
			y.scrollTop=y.scrollHeight;
			X.value="";
			if(k=!k)setTimeout(_=>{
				C.style.display=CT.style.display="none";
				cl(ST,"selected");
				cl(S,"inactive",1);
				cl(CT,"selected",1);
				setTimeout(_=>{
					x.innerHTML+=`<span class=kick><span class=c>:</span><span class=l>:</span><span class=s>: </span><span class=c>(</span><span class=l>(<span class=h>Kick</span>\\<span class=b>#SIN</span><span class=c>)</span><span class=l>)</span> <span class=h>\\\\St0rM\\\\</span>[<span class=b>~St0rM@sinnerz.com</span>] kicked <span class=w>YOU</span> from <span class=b>#SIN</span> <span class=s>[</span>iN a whIfF oF SuLfur, <span class=s>\\\\St0rM\\\\</span> is TrANSfoRMEd inTo a GARgAnTUaN beAsT bY hiS MenTOr, LorD SaTaN, and sLowLy CruSheS <span class=h>x0</span> wiTH a GiANT mAGgot-RidDEn hOoF...</span><span class=s>]</span></span></span>`;
					x.scrollTop=x.scrollHeight;
					off("app-xircon",E.s,h)
				},666)
			},1500);
			k=1};
		C.style.display=CT.style.display="none";
		cl(ST,"selected");
		cl(CT,"selected",1);
		anim(S,_=>{
			l++;sp=99;
			C.style.display="block";CT.style.display="flex";
			cl(ST,"selected",1);cl(CT,"selected");cl(S,"inactive");
			anim(C);
			on("app-xircon",E.s,h);
			[S,C,ST,CT].forEach(i=>{
				on(i,E.c,e=>{
					[S,C].forEach(b=>(b.style.zIndex=2,cl(b,"inactive")));
					[ST,CT].forEach(b=>cl(b,"selected",1));
					cl(e.currentTarget.id.includes("chat")?CT:ST,"selected");
					cl(e.currentTarget.id.includes("chat")?C:S,"inactive",1);
					(e.currentTarget.id.includes("chat")?C:S).style.zIndex=5;
				})})})},
	cal=E=>{
		let M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
		D="SMTWTFS".split(""),
		Y=[],N=new Date(),Q=N.getMonth(),S=make("section"),A=make("select");
		S.className="cal";
		A.name="m";
		M.forEach((V,I)=>{let O=make("option");O.value=I;O.textContent=V;A.appendChild(O)});
		A.selectedIndex=Q;
		for(let I=1970;I<=1999;I++)Y.push(I);
		let B=make("input");
		B.type="number";B.name="y";B.min=1970;B.max=1999;B.value=1999;
		let G=make("div");G.className="cal-grid";
		let F=_=>{
			let U=+A.value,W=+B.value,J=new Date(W,U,1).getDay(),K=new Date(W,U+1,0).getDate(),C="",T=N.getDate();
			C+=D.map(X=>`<div class="cal-head">${X}</div>`).join("");
			for(let I=0;I<J;I++)C+='<div class="cal-cell"></div>';
			for(let I=1;I<=K;I++)C+=`<div class="cal-cell${I==T?" today":""}">${I}</div>`;
			let R=(J+K)%7;if(R)for(let I=R;I<7;I++)C+='<div class="cal-cell"></div>';
			G.innerHTML=C}
		F();
		A.onchange=B.onchange=F;
		S.appendChild(A);S.appendChild(B);S.appendChild(G);
		E.appendChild(S)},
	clock=S=>{
		let I,A=6,H=$("hr").style,M=$("mn").style,C=$("sc").style,T=$("thetime");
		S?I=setInterval(_=>{
			let D=new Date,h=D.getHours(),m=D.getMinutes(),s=D.getSeconds();
			H.transform=`rotateZ(${h*30+m*A/12}deg)`;
			M.transform=`rotateZ(${m*A}deg)`;
			C.transform=`rotateZ(${s*A}deg)`;
			T.value=(h%12||12)+' : '+m.toString().padStart(2,0)+' : '+s.toString().padStart(2,0)+' '+(h<12?'AM':'PM')
		},1e3):clearInterval(I)}
	calc=_=>{
		/* so much bs math for that stupid trailing period */
		let S=$("calcscreen"),B=$$("#app-calc"),V="0.",A=0,O="",W=0;
		F=x=>x.includes(".")?x:x+".";
		Z=x=>{
			V=/^0\d/.test(x)&&!x.startsWith("0.")?x.replace(/^0+/,""):x;
			if(V==""||V==".")V="0.";
			S.value=F(V)};
		D=e=>{
			let T=e.target.textContent;
			if(W)V="0.",W=0;
			if(e.target.classList.contains("dot")){
				if(V.includes("."))return;
				V+=".";
			}else{
				if(V=="0.")V="";
				V+=T}
			Z(V)};
		P=e=>{
			if(O&&!W)Q();
			A=+V;O=e.target.textContent;W=1};
		Q=_=>{
			let N=+V,R=A;
			if(!O)return;
			R=O=="+"?A+N:O=="-"?A-N:O=="*"?A*N:O=="/"?N?A/N:0:O=="%"?N?A%N:0:R;
			Z(""+(R||0));V=""+(R||0)+((""+(R||0)).includes(".")?"":".");O="";W=1};
		M=e=>{
			let T=e.target.textContent;
			if(T=="Backspace")V=V.length>2?V.slice(0,-1):"0.",Z(V);
			else if(/^(CE|MC)$/.test(T))Z("0."),A=0,O="",W=0;
			else if(T=="MR")Z(""+A+((""+A).includes(".")?"":".")),V=""+A+((""+A).includes(".")?"":"."),W=1;
			else if(T=="MS")A=+V;
			else if(T=="M+")A+=+V;
			else if(T=="sqrt")Z(""+Math.sqrt(+V||0)+((""+Math.sqrt(+V||0)).includes(".")?"":".")),W=1;
			else if(T=="1/x")Z(""+1/(+V||1)+((""+(1/(+V||1))).includes(".")?"":".")),W=1;
			else if(T=="+/-")Z(""+-(+V||0)+((""+-(+V||0)).includes(".")?"":".")),W=1};
		H=e=>{
			let T=e.target.textContent;
			if(e.target.classList.contains("n")||e.target.classList.contains("dot"))D(e);
			else if(/[+\-*\/%]/.test(T))P(e);
			else if(T=="=")Q();
			else M(e);
			S.focus()};
		B.querySelectorAll("button").forEach(i=>i.onclick=H);
		S.value="0."},
	beginAni=(D=$('begin'),K=[[0,80],[.4,0],[.6,15],[.72,0],[.82,4],[.9,0],[.96,1],[1,0]],T=2500,S=performance.now())=>{
		if(D){D.style.display="block";
		(A=>A(A,S))(function F(Self,S){
			const E=(performance.now()-S)/T,
				I=K.findIndex(([P])=>E<=P),
				[P1,M1]=K[I-1]||K[0],
				[P2,M2]=K[I]||K[K.length-1],
				L=(E-P1)/(P2-P1),
				M=M1+(M2-M1)*L;
			D.style.marginLeft=M+"%";
			E<1?requestAnimationFrame(()=>Self(Self,S)):D.style.marginLeft="0%"})}},
	flicker=_=>{
		hg();
		$("taskbar").style.visibility="hidden";
		let A=$("desktop").querySelectorAll("article"),I=0,C=2*Math.floor(2+Math.random()*2);
		A.forEach(E=>E.style.visibility="hidden");
		setTimeout(_=>{
			$("taskbar").style.visibility="visible";
			sound('startup');
			setTimeout(F=_=>{
				A.forEach(E=>E.style.visibility=I%2?"visible":"hidden");
				if(++I<C)setTimeout(F,100);
				else{
					hg(1);
					rec>0
						?run("recovery",{h:false,i:false,d:{x:252,y:144},o:_=>{on("recoverycancel",E.c,_=>tclose("recovery"));on("recoverycheck",E.c,_=>n("BSOD"))}})
						:beginAni()}},1200)},1000)},
	timer=s=>{
		s?dlt=setInterval(_=>{
			totalMinutes+=Math.floor(2880+Math.random()*(480));
			$("dltime").innerHTML=
				Math.floor(totalMinutes/1440)+" Days, "+
					Math.floor(totalMinutes%1440/60)+" hours, "+
					totalMinutes%60+" minutes";
		},5e3):clearInterval(dlt)},
	victory=_=>{
		const S=1.5,W=71,H=96,CW=W,CH=H,CWH=CW/2,CHH=CH/2,CARD=new Image();
		let I=52;
		function PlayingCard(I,X,Y,SX,SY){
			if(SX===0)SX=2;
			let CX=(I%4)*W,CY=Math.floor(I/4)*H;
			this.update=_=>{
				X+=SX;Y+=SY;
				if(X<-CWH||X>canvas.width+CWH)return cards.splice(cards.indexOf(this),1),false;
				Y>canvas.height-CHH&&(Y=canvas.height-CHH,SY=-SY*0.85);
				SY+=0.98;
				lok&&ctx.drawImage(CARD,CX,CY,W,H,Math.floor(X-CWH*S),Math.floor(Y-CHH*S),CW*S,CH*S);
				return true}}
		const ThrowCard=(X,Y)=>cards.push(new PlayingCard(I>0?I--:I=51,X,Y,Math.floor(Math.random()*6-3)*2,-Math.random()*16)),
			ANI=_=>{let J=0,L=cards.length;while(J<L){cards[J].update()?J++:L--}requestAnimationFrame(ANI)};
		CARD.src="https://www.windows98.website/ui/i/cards.png";
		on(document.body,E.P,E=>{ThrowCard(E.clientX,E.clientY)});
		on(document.body,E.V,E=>{if(E.pressure===0)return;ThrowCard(E.clientX,E.clientY)});
		noesc();
		lok&&requestAnimationFrame(ANI)},
	suspend=_=>{
		const po=$("poweroff");
		shutdown();
		sound("logoff");
		["BSOD","boot","windows"].forEach(i=>{$(i).style.visibility="hidden"});
		po.style.display="block";
		po.style.pointerEvents="all";
		$("shutdowntext").style.display="none";
		on(po,E.c,_=>{
			po.style.display="none";
			po.style.pointerEvents="none";
			shutdown();n("windows")})},
	poweroff=_=>{
		shutdown();
		sound("logoff");
		w8();
		let b=$("boot").style;
		b.visibility="visible";
		$("sdmsg").innerHTML="Shutting Down...";
		$("sdmsg").style.display="block";
		setTimeout(_=>{
			b.visibility="hidden";
			dp.style.display="none";
			$("poweroff").style.display="block";
			$("shutdowntext").style.display="block";
			w8(1);
			clearTimeout(this)
		},3000)},
	reboot=_=>{
		off($("BSOD"),E.c,reboot);
		off(window,E.k,reboot);
		n("boot")},
	bsod=_=>{
		shutdown();
		rec++;
		$("bsoderr").innerHTML=fatals[Math.random()*fatals.length|0].replace(/HEX/g,Math.random().toString(16).substring(2,10).toUpperCase());
		on($("BSOD"),E.c,reboot);
		on(window,E.k,reboot)},
	cmdPrompt=e=>{
		if(e.key!="Enter")return;
		e.preventDefault();
		let p=e.target.value.split('WINDOWS> ').pop(),a=e.target.id,m=(a=="puttycli"?neterrs:errs)[Math.random()*a.length|0];
		if(p.includes('help'))m="bwahahaha! there's no help here.";
		if(p.includes('quit'))m="quitters never win.";
		if(p.includes('shutdown'))n("poweroff");
		if(p.includes('reboot')){
			shutdown();
			$("shutdowntext").style.display="none";
			$("sdmsg").style.display="none";
			n("boot")};
		e.target.value+=`\n${m}\n\n`+(a=="puttycli"?"[root@localhost C:\\]# ":a==="dosprompt"?"C:\\ ":"C:\\WINDOWS> ");
		promptfocus(e.target)},
	promptfocus=(d,b=0)=>(setTimeout(_=>{
		d.style.display="block";
		d.focus();
		d.setSelectionRange(d.value.length,d.value.length),d.scrollTop=d.scrollHeight;
		if(b)d.blur();
	},1000)),
	prompt=i=>on(i,E.k,cmdPrompt),
	msdos=_=>{
		sound("logoff");
		shutdown();
		w8();
		let b=$("boot").style;
		b.visibility="visible";
		$("sdmsg").style.display="block";
		$("sdmsg").innerHTML="Rebooting to MS-DOS...&nbsp;&nbsp;&nbsp;";
		setTimeout(_=>{
			b.visibility="hidden";
			$("poweroff").style.display="block";
			$("shutdowntext").style.display="none";
			w8(1);
			clearTimeout(this);
			prompt(dp);
			promptfocus(dp);
		},2000)},
	tracker=s=>{let V=$("tracker");s?(V.pause(),V.currentTime=0):!muted()&&V.play()},
	boot=_=>setTimeout(_=>(n("windows"),clearTimeout(this)),2000),
	windows=_=>{
		lok=0;
		flicker();
		canvas.style.display="block";
		canvas.width=ctx.canvas.clientWidth;
		canvas.height=ctx.canvas.clientHeight;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		batch(progs);
		on(tclock,E.c,_=>{
			run("calendar",{
				i:false,
				h:false,
				d:{x:192,y:178},
				o:_=>clock(1),
				x:_=>{clock(0);on("app-calendar",E.s,e=>(p0p(e),tclose("calendar")))}})});
    on("trayvol",E.c,_=>{
      const V=$("vol"),M=$("mute"),T=$("trayvol");
      $("app-volume").classList.toggle("app-hidden");
			[V,M].forEach(i=>on(i,E.i,_=>{(M.checked)?
					(T.alt=ts.innerHTML="Muted",T.src="/ui/i/muted.png"):
					(T.alt=ts.innerHTML="Volume "+V.value+"%",T.src="/ui/i/tray-sound.png")}))});
		on("spewfy",E.d,_=>{
			msg({
				i:"sine",t:"Dr Spewfy",s:1,
				o:_=>cl($("jm"),"app-hidden",1),
				m:`<div class=pad><aside><img style="transform:scale(1);margin-top:-10px" width=32 height=32 src=/ui/i/err.png></aside><section>Can't load (or register) custom control 'COMCTL32.OCX'</section><section class=field-row><button class="close focused">OK</button></section></div>`})});
		on("cd",E.d,cdrom);
		on("disks",E.d,floppy);
		on("msie",E.d,e=>{
			p0p(e);
			topen("ie");
			ctx=canvas.getContext("2d");
			ctx.drawImage(img,canvas.width/2-333.5,canvas.height/2-132);
			noesc();
			on(document.body,E.v,e=>ctx.drawImage(img,e.clientX-333.5,e.clientY-25));
			on(document.body,E.d,_=>n("BSOD"))});
		on("dialup",E.d,_=>{
			const id="dialup";
			topen(id);
			let d,i=0,a=sound('dialup'),
			l=setInterval(_=>(i+=10)<=100
				?d.width=i+"%"
				:(d.width="100%",
					d.background="#008000",
					$("dialupani").src="/ui/i/connected.png",
					$("lbldialup").textContent="Connected to clover.net @ 28.8 mbps!",
					$("btndialup").textContent="OK",
					tn.src="/ui/i/tray-network.gif",
					tn.alt="Connected to Clover.net at 28.8 mbps",
					clearInterval(l)),2424);
			msg({
				m:'<img id=dialupani width=347 height=144 src=/ui/i/dialing.gif><p id=lbldialup>Dialing up clover.net... 740-284-0003</p><div class=progress><span id=dialupbar style="width:0%;"> </span></div></p><section class=field-row><button id=btndialup class=close>Cancel</button></section>',
				c:_=>{a.pause(),clearInterval(l),tclose(id)},
				o:_=>{d=$("dialupbar").style},
				t:"Windows98 - Dial-Up",
				i:"modem"})});
		on("game",E.d,_=>{
			topen("solitaire");
			ctx=canvas.getContext("2d");
			lok=1;
			victory()});
		on($("desktop"),E.c,e=>(unselect(),v&&t(e)));
		$$$('#desktop article').forEach(i=>on(i,E.c,e=>(p0p(e),unselect(),v&&t(e),cl(e.target.parentElement,"selected"))));
		$$$('article img').forEach(i=>{
			on(i,E.m,e=>{
				p0p(e);
				let a=i.parentElement,s=e.clientX-a.getBoundingClientRect().left,n=e.clientY-a.getBoundingClientRect().top,
				m=e=>(a.style.left=e.pageX-s+"px",a.style.top=e.pageY-n+"px"),
				u=_=>(off(document,E.v,m),off(document,E.p,u));
				on(document,E.v,m);on(document,E.p,u)})});
		on("start",E.c,t);
		on("logoff",E.c,i=>{
			t(i);
			msg({
				m:'<aside><img src="/ui/i/logoff.png" style="width:48;height:48"></aside><section><p>Are your sure you want to log off?</p><section class="field-row"><button id="loconfim">Yes</button><button class="close">No</button></section>',
				o:_=>{
					on("loconfim",E.c,_=>{
						msg({x:1});
						sound("logoff");
						hg();
						shutdown();
						$("windows").style.visibility="hidden";
						document.body.style.background="#018281";
						setTimeout(_=>{hg(1);msg({
							m:'<div id="logon"><form><aside><img src="/ui/i/mycpu.png" style="width:48;height:48"></aside><section><p>Enter your network password for Microsoft Networking</p><section class="field-row"><label for="user"><u>U</u>ser Name</label><input id="user" type="text" value="xeR0" autocomplete="username"></section><section class="field-row"><label for="pw"><u>P</u>assword&nbsp;</label><input id="pw" type="password" autocomplete="current-password"></section><br><br><br><section class="field-row" id="frmErr">&nbsp;</section></section><aside><section class="field-row"><button class="focused" type="submit">OK</button></section><section class="field-row"><button type="button" disabled>Cancel</button></section></aside></form></div>',
							o:_=>on("logon",E.s,e=>{p0p(e);
								(!$("pw").value)?
									$("frmErr").innerHTML="Enter your password":
									(msg({x:1}),n("windows"),document.body.style.background="#222")})})},
						1000)})}})});
		on("shutdown",E.c,e=>{
			t(e);
			msg({
				m:`<form id="frmSd"><aside><img src="/ui/i/shutdown.png" style="width:48px;height:48px"></aside><section><p>What do you want your computer to do?</p><section class="field-row aleft"><input id="r1" type="radio" name="shutdownopt"><label for="r1">S<u>t</u>and By</label></section><section class="field-row aleft"><input id="r2" type="radio" name="shutdownopt"><label for="r2"><u>S</u>hutdown</label></section><section class="field-row aleft"><input id="r3" type="radio" name="shutdownopt"><label for="r3"><u>R</u>estart</label></section><section class="field-row aleft"><input id="r4" type="radio" name="shutdownopt"><label for="r4">Restart in <u>M</u>S-DOS mode</label></section><section class="field-row aleft"><button type="submit">OK</button><button class="close">Cancel</button><button class="help">Help</button></section></form>`,
				o:_=>on($("frmSd"),E.s,e=>{p0p(e);
					let c=$$("input[name=shutdownopt]:checked");
					if(c){msg({x:1})
						switch(c.id){
							case"r1":suspend();break;
							case"r2":n("poweroff");break;
							case"r3":shutdown(),n("boot");break;
							case"r4":msdos();break;
							default:n("BSOD")}
					}else $$("input[name=shutdownopt]").focus()})})});
		$$$(".more").forEach(i=>{
			on(i,E.u,_=>foo(0));
			on(i,E.o,startmore);
		});
		on(fo,E.o,_=>foo(1));
		on(fo,E.u,_=>foo(0));
		on($("desktop"),E.x,e=>{
			p0p(e);unselect();
			if(v)t(e);
			showctx("desktopmenu",e,20,25);
		});
		$$$("#desktop article").forEach(i=>{
			on(i,E.x,e=>{
				p0p(e);unselect();
				if(v)t(e);
				cl(e.target.parentElement,"selected");
				showctx("appmenu",e,20,27)})});
		$$$("footer aside img").forEach(i=>(on(i,E.c,tip),on(i,E.o,tip)));
		on("mail",E.c,_=>sound('yougotmail'));
		on("showdesktop",E.c,showdesktop);
		startmenu.forEach(e=>e.tabIndex=0);
		on(window,E.k,e=>{
			if(e.metaKey&&!e.altKey&&!e.ctrlKey){
				if(e.key=="d"||e.key=="D"){t(e);showdesktop();return}
				if(e.key=="r"||e.key=="R")window.location.reload();
				t(e)//just win
			}
			else if(e.altKey&&!e.metaKey&&!e.ctrlKey&&e.key=="Tab"){
				p0p(e);
				if(!ata){
					//visible_only=tasks.filter(t=>!t.h);
					if(!tasks.length)return;
					ati=tasks.findIndex(t=>t.f);
					if(ati==-1)ati=0;
					ata=1
				}else
				ati=(ati+(e.shiftKey?-1:1)+tasks.length)%tasks.length;
				showAT();
				return
			}else if(e.key=="Escape"){
				foo(0);hv();
				menus=startmenu;popt=fop=0;
        menus[fop].focus();
        sm.visibility="hidden";
        $("start").classList.remove("pressed");
        return}
			if(!v)return;
			let sel=menus.indexOf(document.activeElement),len=menus.length;
			if(e.key=="ArrowUp"||e.key=="ArrowDown")
				menus[sel==-1?(e.key=="ArrowUp"?len-1:0):(sel+(e.key=="ArrowDown"?1:-1)+len)%len].focus();
				else if(e.key=="ArrowRight"&&!popt&&sel!=-1&&menus[sel].classList.contains("more")){
					startmore({target:menus[sel],currentTarget:menus[sel],preventDefault(){},stopPropagation(){}});
					fop=sel;
					setTimeout(_=>{
						let fm=Array.from($$$("#flyout a"));
						if(fm.length){
							fm.forEach(e=>e.tabIndex=0);
							menus=fm,popt=1,menus[0].focus()
						}},0)
				}else if(e.key=="ArrowLeft"&&popt){
					foo(0);menus=startmenu;popt=0;
					if(fop>=0)menus[fop].focus()
				}else if(e.key=="Enter"&&sel!=-1)menus[sel].click()});
		on(window,E.U,e=>{
			if(ata&&!e.altKey) {
				tfocus(tasks[ati].e);
				cl(alttab,"off");
				ata=ati=0}})},
	merge=(...o)=>Object.assign({},...o),
	batch=C=>{
		for(let K in C){
			let V=C[K]
			if(Array.isArray(V)){let[d,b,o]=V;run(K,{d,b,o})}
			else run(K,V)}},
	baseB0={b:false},
	baseB0Dxy=x=>merge({d:x},baseB0),
	baseDxy=x=>({d:x}),
	progs={
		nero:baseDxy({x:1,y:1}),
		adraw:baseDxy({x:247,y:142}),
		aohell:baseDxy({x:39,y:30}),
		bo2k:merge(
			baseDxy({x:251,y:174}),{
				o:_=>cl($("cdc"),"app-hidden",1),
				x:_=>["bo2kok","bo2kclose"].map((id,j)=>on(id,E.c,e=>(p0p(e),j?n("BSOD"):tclose("bo2k"))))}),
		calc:merge(
			baseDxy({x:115,y:100}),{
				o:_=>(calc(),on("app-calc",E.s,e=>(p0p(e))))}),
		calendar:merge(
			baseDxy({x:192,y:178}),{
				o:_=>clock(1),
				x:_=>{clock(0);on("app-calendar",E.s,e=>(p0p(e),tclose("calendar")))}}),
		dreamweaver:merge(
			baseDxy({x:222,y:149}),{
				x:_=>$$$("#app-dreamweaver img").forEach(i=>on(i,E.c,_=>n("BSOD")))}),
		explorer:merge(
			baseB0Dxy({x:248,y:162}),{
				x:_=>ico("#app-explorer",_=>n("BSOD"))}),
		mycpu:merge(
			baseB0Dxy({x:248,y:162}),{
				x:_=>ico("#app-mycpu",e=>e.target.classList.contains("floppy")?floppy(e):e.target.classList.contains("cdrom")?cdrom(e):n("BSOD"))}),
		notepad:baseB0Dxy({x:252,y:144}),
		putty:merge(
			baseB0Dxy({x:249,y:146}),{
				o:_=>{let p=$("puttycli");promptfocus(p);prompt(p)}}),
		photoshop:merge(
			baseDxy({x:280,y:190}),{
				m:_=>p.blur(),
				c:_=>p.blur(),
				x:_=>{
					on("pstools",E.c,_=>p.click());
					let D=0,X,Y,A=$("artwork"),P=$("pscolors"),ctx=A.getContext("2d");
					A.width=A.height=300;
					on(A,E.P,e=>{
						let rect = A.getBoundingClientRect();
						X = (e.clientX - rect.left) * (A.width / rect.width);
						Y = (e.clientY - rect.top) * (A.height / rect.height);
						D = 1;
					});
					on(A,E.K,_=>D=0);
					on(A,E.l,_=>D=0);
					on(A,E.V,e=>{
						if(!D) return;
						let rect=A.getBoundingClientRect();
						let x=(e.clientX-rect.left)*(A.width/rect.width);
						let y=(e.clientY-rect.top)*(A.height/rect.height);
						ctx.strokeStyle=P.value;
						ctx.lineCap="round";
						ctx.lineWidth=3;
						ctx.beginPath();
						ctx.moveTo(X,Y);
						ctx.lineTo(x,y);
						ctx.stroke();
						[X,Y]=[x,y]})}}),
		regedit:baseB0Dxy({x:221,y:107}),
		toneloc:baseDxy({x:247,y:148}),
		sub7:baseDxy({x:115,y:90}),
		trash:merge(
			baseB0Dxy({x:248,y:192}),{
				o:_=>on($$("#app-trash .win"),E.c,e=>{
					msg({
						m:`<div class=pad><aside><img style="transform:scale(1);margin-top:-10px" width=32 height=32 src=/ui/i/erase.png></aside><section>Are you sure you want to delete 'Windows'?</section><section class=field-row><button class=close><u>Y</u>es</button><button class=close disabled><u>N</u>o</button></section></div>`,
						t:"Confirm File Delete",
						s:1,
						c:_=>{
							cl($("trashwin"),"app-hidden",1);
							setTimeout(_=>(msg({
								m:`<img style="transform:scale(0.5);margin:-30px -135px;" src=/ui/i/delete.gif>`,
								t:"Emptying the Recycle Bin...",
								o:_=>{cl($('msg'),'dl');setTimeout(_=>{msg({x:1});cl($('msg'),'dl',1);n("BSOD");clearTimeout(this)},9760)}
							}),clearTimeout(this)),100)}})})}),
		utorrent:merge(
			baseB0Dxy({x:250,y:133}),{
				o:_=>timer(1),
				m:_=>timer(0),
				c:_=>timer(0),
				x:_=>on("utorrentcancel",E.c,e=>(p0p(e),tclose("utorrent"),timer(0)))}),
		vb6:merge(
			baseB0Dxy({x:354,y:195}),{
				o:_=>{
					const C=$("vbcode"),F=$("vbform"),H=e=>{
						[C,F].forEach(i=>{cl(i,"inactive");i.style.zIndex=1;});
						cl(e.currentTarget,"inactive",1);
						e.currentTarget.style.zIndex=2};
					[C,F].forEach(i=>on(i,E.c,H));
					on("vbcomps",E.c,_=>n("BSOD"))}}),
		vstudio:merge(
			baseB0Dxy({x:354,y:195}),{
				o:_=>on("vstudioctrls",E.c,_=>n("BSOD"))}),
		winamp:merge(
			baseB0Dxy({x:1,y:1}),{
				x:_=>on($("winampbody"),E.c,e=>(p0p(e),sound("winamp")))}),
		wsftp:merge(
			baseB0Dxy({x:280,y:188}),{
				o:_=>promptfocus($("wsftplog"),1),
				x:_=>on("app-wsftp",E.s,e=>(p0p(e),n("BSOD")))}),
		winnuke:merge(
			baseDxy({x:220,y:120}),{
				o:_=>{
					on("app-winnuke",E.s,e=>{p0p(e)});
					on("nukex",E.c,_=>tclose("winnuke"));
					on("btnnuke",E.c,_=>msg({
						i:"nuke",t:"WINNUKE",
						m:`<div class=pad><aside><img style="transform:scale(1)" width=32 height=32 src=/ui/i/warning.png></aside><section>WinNuke V95 was designed to provide an effective way to test your network against potential security hazards and should not be used for any malicious intent. Do you agree?</section><section class=field-row><button class=nuke><u>Y</u>es</button><button class=nuke><u>N</u>o</button></section></div>`,
						o:_=>$$$(".nuke").forEach(i=>on(i,E.c,_=>msg({
							i:"nuke",t:"WINNUKE",s:1,
							m:`<div class=pad><aside><img style="transform:scale(1);margin-top:-10px" width=32 height=32 src=/ui/i/err.png></aside><section>Connection Failed Retry?</section><section class=field-row><button class=close><u>Y</u>es</button><button class=close><u>N</u>o</button></section></div>`})))}))}}),
		xircon:merge(
			baseDxy({x:248,y:191}),{
				o:_=>chatani()}),
		help:merge(
			{h:E.c,i:false,d:{x:219,y:150}},{
				o:_=>t(fe),
				x:_=>on("helpmenu",E.c,_=>n("BSOD"))}),
		ft2: merge(
			baseB0Dxy({x:202,y:158}),{
				o:_=>tracker(),
				c:_=>tracker(1)}),
		dos:merge(
			{h:E.c,i:false,d:{x:247,y:142}},{
				o:_=>{let d=$("dinput");prompt(d);promptfocus(d);t(fe)}})};
	let v=0,eyes=[],tasks=[],cards=[],ctx=canvas.getContext("2d"),totalMinutes=369426,rec=0,lok=0,menus=startmenu,popt=0,fop=-1,ata=0,ati=0;
	menus.forEach(m=>m.onmouseenter=_=>m.focus());
	$$$('input,textarea').forEach(e=>['autocomplete','autocorrect','autocapitalize'].forEach(a=>e.setAttribute(a,'off'))||e.setAttribute('spellcheck','false'));
	$$$('img').forEach(e=>e.setAttribute('draggable',false));
	time();
	n("boot");//let's boot up!
})();
