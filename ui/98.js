(_=>{
	const apps=[
		"app-adraw",
		"app-recovery",
		"app-aohell",
		"app-bo2k",
		"app-dos",
		"app-explorer",
		"app-help",
		"app-nero",
		"app-notepad",
		"app-mycpu",
		"app-photoshop",
		"app-dreamweaver",
		"app-regedit",
		"app-solitaire",
		"app-sub7",
		"app-utorrent",
		"app-vb6",
		"app-winamp",
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
			s: "submit",
			P: "pointerdown",
			V: "pointermove",
		},
		errs=['Access denied','Attempt to remove the current directory','Attempt to write on write-protected diskette','Bad request structure length','Cannot make directory entry','Data error (CRC)','Drive not ready','Duplicate name on network','Duplicate redirection','FCB unavailable','Fail on INT 24H','File already exists','File not found','General failure','Incompatible remote adapter','Incorrect response from network','Insufficient memory','Invalid access code','Invalid data','Invalid disk change','Invalid drive was specified','Invalid environment','Invalid format','Invalid function number','Invalid handle.','Invalid memory block address','Invalid parameter','Invalid password','Lock violation','Memory control blocks destroyed','Network BIOS command limit exceeded','Network BIOS session limit exceeded','Network adapter hardware error','Network busy','Network device fault','Network device no longer exists','Network device type incorrect','Network name deleted','Network name limit exceeded','Network name not found','Network request not accepted','Network request not supported','No more files','Not enough space for print file','Not same device','Path not found','Print file deleted (not enough space)','Print of disk redirection paused','Print queue full.','Printer out of paper','Read fault','Remote computer not listening','Reserved','Sector not found','Seek Error','Sharing buffer overflow','Sharing violation','Temporarily paused','Too many open files','Too may redirection','Unexpected network error','Unknown command','Unknown media type','Unknown unit','Write fault'],
			fatals=['Error 0D : 0157 : 0xAC1D0000-HEX {Q307908}','Exception 0D at VXD VMM(0H)+00005B01 0028:HEX','Exception 0E Access Violation in Module WMAD.EXE at HEX {Q312931}','Exception 0E at 0028:HEX in VXD called from 0028:C001d188 in VXDNDIS','Exception 0E at 0028:HEX in VXD VMM {Q253241}','Exception 0E at 0028:HEX in VXD IFSMGR','Exception 0E at 0028:HEX in VxD WSIPX(01)... called from 0028:C0043174 in VxD NDIS(01) {Q192445}','Exception 0E at 0xAC1D0000:HEX in VxD IFSMGR {Q153598}','Exception 0E... called from 0028:HEX in VxD NDIS {Q283043}','Fatal 0D has occurred at 0028:HEX or 0246:013F47FB','Fatal Exception 06 Has Occurred at 0xAC1D0000+HEX','Fatal Exception 06 at 0028:HEX in VXD VMM (06)','Fatal Exception 0E 0028:HEX in VXD VCACHE(01)','Fatal Exception 0E 06 at 0028: HEX ','Fatal Exception 0E at 0028:HEX in VXD SYMEvent','Fatal Exception 0E at 0028:HEX in VXD VREDIR','Fatal Exception 0E at 0028:HEX in VXD IFSMGR','Fatal Exception 0E at 0028:HEX in VXD IOS (04)','Fatal Exception 0E at 0028:HEX in VXD VSERVER','Fatal Exception 0E at 0028:HEX in VXD IFSMGR(01)','Fatal Exception 0E at 0028:HEX in VXD VWIN32','Fatal Exception 0E at 0028:HEX in VXD Emu10k1','Fatal Exception 0E at 0028:HEX in VXD IOS','Fatal Exception 0E at 0028:HEX in VXD IOS (01)','Fatal Exception 0E at 0028:HEX in VXD VMM (06)','Fatal Exception 0E at 0157:BFF9A25B + 0xAC1D0000:HEX','Fatal Exception 0E at HEX in VXD VWIN32','Fatal Exception 0E at 0xAC1D0000:HEX in VxD SCSI1HLP {Q250005}','Fatal Exception 0E in 0xAC1D0000:HEX VPOWERD','Fatal Exception 0E in 0xAC1D0000:HEX VXD IFSMGR','Fatal Exception in 0xAC1D0000:HEX CDVSD Starting','Fatal Exception in 0xAC1D0000:HEX VXD VMM','Fatal exception at 0028:HEX in VxD WSIPX(01) {Q192445}','MPREXE caused an exception 03h at HEX in module USER32.DLL','MSIMN caused an exception C0000006h+HEX in module DIRECTDB.DLL','MSTASK caused an exception 03h at HEX in module USER32.DLL','Program Has Caused a Fatal Exception 0D at 00457:HEX & Will Be Terminated','RUNDLL32 caused an exception 03h at HEX in module USER32.DLL','SCANDSKW caused Fatal exception 03h at HEX in module USER32.DLL','STATEMGR caused an exception 03h at HEXin module USER32.DLL','USR32.EXE caused an exception 03h at HEX in module USER32.DLL'],
			fe={preventDefault:_=>{},stopPropagation:_=>{}},
	$=e=>document.getElementById(e),
	$$=e=>document.querySelector(e),
	$$$=i=>document.querySelectorAll(i),
	on=(x,e,r,o=!1)=>{x.addEventListener(e,r,o);eyes.push({e:x,t:e,l:r,o:o})},
	off=(x,e,r,o=!1)=>{
		x.removeEventListener(e,r,o);
		try{eyes.splice(eyes.indexOf(eyes.find(l=>l.e===x&&l.t===e&&l.l===r&&l.o===o)),1)}catch{}},
	cl=(e,c,i=0)=>e.classList[i?'remove':'add'](c),
	p0p=e=>{e.preventDefault();e.stopPropagation()},
	sound=i=>{let a=new Audio('/ui/s/'+i+'.mp3');a.play().catch(_=>{});return a},
	fs=e=>{let d=document,b=d.body;foo(0);t(e);d.fullscreenElement?d.exitFullscreen():b.requestFullscreen()},
	shutdown=_=>{
		canvas.style.display="none";
		eyes.forEach(({e,t,l,o})=>{e.removeEventListener(t,l,o)});
		tasks=[];
		eyes=[];
		unselect();
		tsync();
		dp.style.display="none";
		$("dialogBody").innerHTML="";
		$("poweroff").style.display="none";
		if(v)t(fe);
		apps.concat("cdc").forEach(a=>cl($(a),"app-hidden"))
		tn.src="/ui/i/tray-disconnected.png"},
	msg=(m,f)=>{
		let d=$("msg");
		$("dialogBody").innerHTML=m;
		d.showModal();
		$$$('#msg .close').forEach(i=>on(i,E.c,e=>(f?.(e),d.close())))},
	sm=$("startmenu").style,
	fo=$("flyout"),
	ts=$("tooltip"),
	tn=$("traynet"),
	p=$('pscolors'),
	dp=$("dosprompt"),
	startmenu=Array.from($$$("#startmenu .menu")),
	canvas=$("glitch"),
	now=new Date(),
	clock=$("clock"),
	showdesktop=_=>{
		apps.forEach(a=>cl($(a),"app-hidden"));
		tasks.forEach(i=>(i.h=1,i.f=0));
		tsync()},
	titlebar=(e,dir,cb)=>{
		let win=$("app-"+e),
			head=win.querySelector("header,h2"),
			task=$$('#tasks > section[name="'+e+'"]'),
			a=dir?task:head,
			b=dir?head:task,
			r1=a.getBoundingClientRect(),
			r2=b.getBoundingClientRect(),
			ani=document.createElement("div");
		ani.id="minani";
		Object.assign(ani.style,{
			left:r1.left+"px",
			top:r1.top+"px",
			width:r1.width+"px",
			height:r1.height+"px",
			position:"fixed",
			zIndex:2000
		});
		ani.innerHTML=head.innerHTML;
		document.body.appendChild(ani);
		ani.animate([
			{left:r1.left+"px",top:r1.top+"px",width:r1.width+"px",height:r1.height+"px",opacity:1},
			{left:r2.left+"px",top:r2.top+"px",width:r2.width+"px",height:r2.height+"px",opacity:0.3}
		],{duration:500,easing:"ease"}).onfinish=_=>{
			ani.remove();
			cb&&cb()}},
	tmin=e=>{
		let win=$("app-"+e);
		titlebar(e,0,_=>{
			cl(win,"app-hidden");
			tasks.find(task=>task.e===e&&(Object.assign(task,{h:1,f:0}),tsync()))})},
	tmax=e=>{
		let win=$("app-"+e);
		if(win.classList.contains("app-hidden")){
			titlebar(e,1,_=>{
				cl(win,"app-hidden",1);
				Object.assign(win.style,{zIndex:55,visibility:"visible"});
			});
		} else {
			cl(win,"app-hidden",1);
			Object.assign(win.style,{zIndex:55,visibility:"visible"})}},
	tclose=e=>{
		let i=tasks.findIndex(task=>task.e===e);
		if(i!==-1){
			tasks.splice(i,1);
			(tasks.length>0)?tfocus(tasks[tasks.length-1].e):tsync();
			if(e!="dialup"&&e!="ie"){$("app-"+e).style.visibility="hidden"}}},
	tfocus=e=>{
		tasks.forEach(i=>i.f=i.e===e);
		tsync();
		apps.forEach(a=>$(a).style.zIndex=50);
		tasks[tasks.findIndex(task=>task.e===e)].h=0;
		if(e!="dialup"&&e!="ie")tmax(e);
		if(e==="dos")promptfocus($("dinput"))
	}
topen=e=>{
	!tasks.some(task=>task.e===e)&&
		tasks.push({e,f:1,h:0,i: '/ui/i/'+
			(e==="adraw"?'msdos.png"><sup>ACiDDraw - MS-DOS':
				e==="aohell"?'aohell.png"><sup>AOHell 95 v3.0 B5':
				e==="bo2k"?'bo2k-server.png"><sup>Back Orifice 2000':
				e==="dialup"?'modem.png"><sup>Windows98 - Dial Up':
				e==="dos"?'msdos.png"><sup>Command Prompt':
				e==="explorer"?'explorer-ico.png"><sup>My Documents':
				e==="help"?'help-ico.png"><sup>Windows Help':
				e==="ie"?'msie.png"><sup>Internet Exploder':
				e==="nero"?'nero.png"><sup>Nero Burning Rom':
				e==="notepad"?'notepad.png"><sup>Todo.txt - Notepad':
				e==="photoshop"?'photoshop.png"><sup>Untitled-1 - Photoshop':
				e==="dreamweaver"?'dw-ico.png"><sup>Untitled-1 - Dreamweaver':
				e==="mycpu"?'mycpu.png"><sup>My Computer':
				e==="recovery"?'windows-slanted.png"><sup>Windows98 Recovery':
				e==="regedit"?'regedit.png"><sup>Registry Editor':
				e==="solitaire"?'game.png"><sup>Solitaire':
				e==="sub7"?'sub7.png"><sup>SubSeven v2.2 by mobman':
				e==="utorrent"?'utorrent.png"><sup>µtorrent v1.3':
				e==="vb6"?'vb6.png"><sup>Visual Basic v6.0':
				e==="winamp"?'winamp.png"><sup>WinAmp':
				e==="wsftp"?'ws_ftp.png"><sup>WS_FTP95 Pro':
				e==="xircon"?'xircon.png"><sup>xIRCon v1.0b4':'')
		});tfocus(e)}
tsync=_=>{
	$("tasks").innerHTML=tasks.map(task=>`<section name="${task.e}" class="task${task.f==1?' selected':''}"><img src="${task.i}</sup></section>`).join("");
	$$$("#tasks .task").forEach(i=>on(i,E.c,e=>tfocus(e.currentTarget.getAttribute("name"))))},
	tdrag=(e,app,xo,yo)=>{
		p0p(e);
		if(e!="dialup"&&e!="ie")tfocus(app);
		let a=e.target.parentElement,
			s=e.clientX-a.getBoundingClientRect().left,
			z=e.clientY-a.getBoundingClientRect().top,
			m=ee=>{Object.assign($("app-"+app).style,{left:(ee.pageX-s+xo)+'px',top:(ee.pageY-z+yo)+'px'})},
			u=_=>{off(document,E.v,m);off(document,E.p,u)};
		on(document,E.v,m);on(document,E.p,u)},
	foo=i=>{fo.style.visibility=(!i)?"hidden":"visible"},
	t=e=>{
		p0p(e);
		hidectx();foo(0);
		sm.visibility=(v=!v)?"visible":"hidden";
		$("start").classList.toggle("pressed");
		if(v){
			menus=startmenu;
			popt=false;
			fop=startmenu.length-1;
			menus[fop].focus()}},
	n=e=>{
		apps.forEach(a=>cl($(a),"app-hidden"));
		["BSOD","boot","windows"].forEach(i=>{$(i).style.visibility="hidden"});
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
		hidectx()
	},
	time=_=>clock.innerHTML=`${now.getHours()%12||12}<span class="blink">:</span>${now.getMinutes().toString().padStart(2,"0")} ${now.getHours()>=12?"pm":"am"}`,
	eject=_=>{try{let c=0,col=Player.cdromCollection;while(c<col.count)col.item(c++).eject()}catch{}},
	timer=s=>{
		s ? dlt=setInterval(_=>{
			totalMinutes+=Math.floor(2880+Math.random()*(480));
			$("dltime").innerHTML=
				Math.floor(totalMinutes/1440)+" Days, "+
				Math.floor(totalMinutes%1440/60)+" hours, "+
				totalMinutes%60+" minutes";
		},5e3):clearInterval(dlt)},
	windows=_=>{
		const listen=(el,evt,fn)=>on($(el),evt,fn),
			closeAll=(sel,fn)=>$$$(sel+" .close").forEach(b=>on(b,E.c,fn)),
			dragWin=(id,xo,yo)=>on($(id),E.m,e=>tdrag(e,id.replace(/title$/,""),xo,yo)),
			run=(a,{i,h,o,c,m,d,b,x}={})=>{
				const fn=e=>{
					topen(a);
					if(d)dragWin(a+"title",d.x,d.y);
					$(a+"exit")&&c!==false&&listen(a+"exit",E.c,e=>(p0p(e),tclose(a),typeof c=="function"&&c()));
					$(a+"min")&&m!==false&&listen(a+"min",E.c,e=>(p0p(e),tmin(a),typeof m=="function"&&m()));
					$(a+"body")&&b!==false&&listen(a+"body",E.c,_=>n("BSOD"));
					o?.(e);x?.(e);
				};
				if(i!==false)listen(a,E.c,e=>(p0p(e),unselect(),cl($(a),"selected")));
				h===false?fn():listen(a,typeof h=="string"?h:E.d,fn);
			},
			ico=(a,d)=>{
				$$(a).querySelectorAll('.ico').forEach(i=>{
					on(i,E.c,e=>(p0p(e),unselect(),cl(i,"selected")));
					on(i,E.d,d)
				})},
			cdrom=_=>msg('<div class="pad"><aside><img style="user-select:none" src="/ui/i/insert-cd.gif"></aside><section>Error reading drive E:\\</p><p>Please insert a CD ROM and try again</p><section class="field-row"><button class="close">Eject</button></section></div>',eject),
			floppy=_=>msg('<div class="pad"><aside><img style="transform:scale(1);user-select:none" src="/ui/i/insert-floppy.png"></aside><section>A:\\ is not accessible.</p><p>The device is not ready.</section><section class="field-row"><button class="close">Ok</button></section></div>',_=>n("BSOD")),
			startmore=e=>{
				const r=e.currentTarget.getBoundingClientRect();
				p0p(e);foo(1);
				e.currentTarget.getAttribute("name")==="start"?
					Object.assign(fo.style,{padding:"10px",height:"52px",top:r.top+"px",left:r.left+r.width-22+"px"}):
					Object.assign(fo.style,{padding:"8px 20px",height:"43px",top:r.top-5+"px",left:r.left+r.width-17+"px"});
				switch(e.currentTarget.getAttribute("id")){
					case "progs":
						(fo.innerHTML='<ul><li class="act">This website is by:</li><li><a class="x0" href="https://x-e.ro" target="_blank">xero harrison</a></li><li><a class="sauce" href="https://github.com/xero/windows98.website" target="_blank">view the source code</a></li></ul>',
							Object.assign(fo.style,{color:"#000",textShadow:"none",height:"auto",width:"auto",padding:"0"}),
							off(fo,E.c,fs))
						break;
					case "favs":
						(fo.innerHTML=`<ul>
											<li><a target="_blank" href="https://x-e.ro">https://x-e.ro</a></li>
											<li><a target="_blank" href="https://0w.nz">https://0w.nz</a></li>
											<li><a target="_blank" href="https://un.kn.0w.nz">https://un.kn.0w.nz</a></li>
											<li><a target="_blank" href="https://xero.style">https://xero.style</a></li>
											<li><a target="_blank" href="https://2133740.xyz">https://2133740.xyz</a></li>
											<li><a target="_blank" href="https://github.com/xero">https://github.com/xero</a></li>
											<li><a target="_blank" href="https://haunted.computer/@xero">https://haunted.computer/@xero</a></li>
										</ul>`,
							Object.assign(fo.style,{color:"#000081",textShadow:"none",height:"auto",width:"auto",padding:"0"}),
							off(fo,E.c,fs))
						break;
					case "settings":
						(fo.innerHTML='<ul><li><a class="fs">Go Full Screen</a></li></ul>',
							Object.assign(fo.style,{color:"#000",textShadow:"none",width:"168px",padding:"0"}),
							on(fo,E.c,fs))
						break;
					default:
						(fo.innerHTML='<ul><li class="disabled"><a class="disabled">(None)</a></li></ul>',
							Object.assign(fo.style,{height:"auto",width:"auto",padding:"0"}),
							off(fo,E.c,fs))
						break;
				}
				$$$("#flyout a").forEach(e=>e.tabIndex=0);
			},
			img=new Image();img.src="https://www.windows98.website/ui/i/ie.png";
		lok=0;
		canvas.style.display="block";
		canvas.width=ctx.canvas.clientWidth;
		canvas.height=ctx.canvas.clientHeight;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		sound('startup');
		["adraw","nero"].forEach(a=>run(a,{
			d:{x:1,y:1}}));
		run("aohell",{
			d:{x:39,y:30}});
		run("bo2k",{
			d:{x:251,y:174},
			o:_=>cl($("cdc"),"app-hidden",1),
			x:_=>{
				listen("bo2kok",E.c,e=>(p0p(e),n("BSOD")));
				listen("bo2kclose",E.c,e=>(p0p(e),tclose("bo2k")))}});
		run("dreamweaver",{
			d:{x:280,y:210},
			x:_=>$$$("#app-dreamweaver img").forEach(i=>on(i,E.c,_=>n("BSOD")))});
		run("explorer",{
			d:{x:248,y:162},
			b:false,
			x:_=>ico("#app-e_plorer",_=>n("BSOD"))});
		run("mycpu",{
			d:{x:248,y:162},
			b:false,
			x:_=>ico("#app-mycpu",e=>{
				if(e.target.classList.contains("floppy"))floppy(e);
				else if(e.target.classList.contains("cdrom"))cdrom(e);
				else n("BSOD")})});
		run("notepad",{
			d:{x:252,y:144},
			b:false});
		run("photoshop",{
			d:{x:140,y:100},
			b:false,
			m:_=>p.blur(),
			c:_=>p.blur(),
			x:_=>listen("app-photoshop",E.c,_=>p.click())});
		run("regedit",{
			d:{x:221,y:107},
			b:false});
		run("sub7",{
			d:{x:118,y:88}});
		run("utorrent",{
			d:{x:250,y:133},
			b:false,
			o:_=>timer(1),
			m:_=>timer(0),
			c:_=>timer(0),
			x:_=>listen("utorrentcancel",E.c,e=>(p0p(e),tclose("utorrent"),timer(0)))});
		run("vb6",{
			d:{x:60,y:44}});
		run("winamp",{
			d:{x:1,y:1},
			b:false,
			x:_=>on($("winampbody"),E.c,e=>(p0p(e),sound("winamp")))});
		run("wsftp",{
			d:{x:280,y:205},
			b:false,
			x:_=>listen("app-wsftp", "submit",e=>(p0p(e),n("BSOD")))});
		run("xircon",{
			d:{x:60,y:44},
		});
		listen("spewfy",E.c,_=>{msg('<div class="pad"><aside><img style="transform:scale(1);user-select:none" src="/ui/i/err.png"></aside><section>The Program can\'t start because VB40032.DLL is missing from<br/>your computer. Try reinstalling the program to fix this problem.</p><section class="field-row"><button class="close">Ok</button></section></div>',_=>{})});
		listen("cd",E.d,cdrom);
		listen("disks",E.d,floppy);
		listen("msie",E.d,e=>{
			p0p(e);
			topen("ie");
			ctx=canvas.getContext("2d");
			ctx.drawImage(img,canvas.width/2-300,canvas.height/2-135);
			noesc();
			on(document.body,E.v,e=>ctx.drawImage(img,e.clientX-300,e.clientY-25));
			on(docuwwwwwwwwwwE.d,_=>n("BSOD"));
		});
		listen("dialup",E.d,_=>{
			const id="dialup";
			topen(id);
			let d,i=0,a=sound('dialup'),
				l=setInterval(_=>(i+=10)<=100
					?d.width=i+"%"
					:(d.width="100%",
						d.background="#008000",
						$("dialupani").src="/ui/i/connected.png",
						$("lbldialup").textContent="Connected to clover.net @ 28.8 mbps!",
						$("btndialup").textContent="Ok",
						tn.src="/ui/i/tray-network.gif",
						tn.alt="Connected to Clover.net at 28.8 mbps",
						clearInterval(l)),2424);
			msg('<img id="dialupani" width="347" height="144" src="/ui/i/dialing.gif"><p id="lbldialup">Dialing up clover.net... 740-284-0003</p><div class="progress"><span id="dialupbar" style="width: 0%;"> </span></div></p><section class="field-row"><button id="btndialup" class="close">Cancel</button></section>',
				_=>{a.pause(),clearInterval(l),tclose(id)});
			d=$("dialupbar").style;
		});
		listen("game",E.d,_=>{
			topen("solitaire");
			ctx=canvas.getContext("2d");
			lok=1;
			victory();
		});
		on($("desktop"),E.c,e=>(unselect(),v&&t(e)));
		$$$('#desktop article').forEach(i=>on(i,E.c,e=>(p0p(e),unselect(),v&&t(e),cl(e.target.parentElement,"selected"))));
		$$$('article img').forEach(i=>{
			on(i,E.m,e=>{
				p0p(e);
				let a=i.parentElement,s=e.clientX-a.getBoundingClientRect().left,n=e.clientY-a.getBoundingClientRect().top,
					m=e=>(a.style.left=e.pageX-s+"px",a.style.top=e.pageY-n+"px"),
					u=_=>(off(document,E.v,m),off(document,E.p,u));
				on(document,E.v,m);on(document,E.p,u);
			});
		});
		listen("start",E.c,t);
		run("help",{
			h:E.c,
			i:false,
			d:{x:219,y:150},
			o:_=>t(fe),
			x:_=>listen("helpmenu",E.c,_=>n("BSOD")),
		});
		run("dos",{
			h:E.c,
			i:false,
			d:{x:1,y:1},
			o:_=>{let d=$("dinput");prompt(d);promptfocus(d);t(fe)},
		});
		listen("logoff",E.c,i=>{
			t(i);msg('<aside><img src="/ui/i/logoff.png"></aside><section><p>Are your sure you want to log off?</p><section class="field-row"><button id="loconfim">Yes</button><button class="close">No</button></section>',_=>{});
			on($("loconfim"),E.c,_=>{
				sound("logoff");
				shutdown();
				$("windows").style.visibility="hidden";
				document.body.style.background="#018281";
				let d=$("msg");
				$("dialogBody").innerHTML='<div id="logon"><form><aside><img src="/ui/i/mycpu.png"></aside><section><p>Enter your network password for Microsoft Networking</p><section class="field-row"><label for="user"><u>U</u>ser Name</label><input id="user" type="text" value="xeR0"></section><section class="field-row"><label for="pw"><u>P</u>assword&nbsp;</label><input id="pw" type="password"></section><br/><br/><br/><section class="field-row" id="frmErr">&nbsp;</section></section><aside><section class="field-row"><button class="close" type="submit">Ok</button></section><section class="field-row"><button class="close" type="button">Cancel</button></section></aside></form></div>';
						d.showModal();
				on($("logon"),E.s,e=>{p0p(e);
					(!$("pw").value)?
						$("frmErr").innerHTML="Enter your password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;":
						(d.close(),n("windows"),document.body.style.background="#222")})})});
listen("shutdown",E.c,e=>{
	t(e);p0p(e);
	let d=$("msg");
	$("dialogBody").innerHTML=`<form id="frmSd"><aside><img src="/ui/i/shutdown.png"></aside><section><p>What do you want your computer to do?</p><section class="field-row aleft"><input id="r1" type="radio" name="shutdownopt"><label for="r1">S<u>t</u>and By</label></section><section class="field-row aleft"><input id="r2" type="radio" name="shutdownopt"><label for="r2"><u>S</u>hutdown</label></section><section class="field-row aleft"><input id="r3" type="radio" name="shutdownopt"><label for="r3"><u>R</u>estart</label></section><section class="field-row aleft"><input id="r4" type="radio" name="shutdownopt"><label for="r4">Restart in <u>M</u>S-DOS mode</label></section><section class="field-row aleft"><button type="submit">Ok</button><button class="close">Cancel</button><button class="help">Help</button></section></form>`;
	d.showModal();
	closeAll("#frmSd",_=>d.close());
	on($("frmSd"),E.s,e=>{
		p0p(e);
		if($$("input[name=shutdownopt]:checked")){
			switch($$("input[name=shutdownopt]:checked").id){
				case "r1":suspend();break;
				case "r2":n("poweroff");break;
				case "r3":(shutdown(),n("boot"));break;
				case "r4":msdos();break;
				default: n("BSOD");break
			}
			d.close()
		}else{
			$$("input[name=shutdownopt]").focus();
		}})});
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
		showctx("appmenu",e,20,27);
	})});
$$$("footer aside img").forEach(i=>(on(i,E.c,tip),on(i,E.o,tip)));
listen("mail",E.c,_=>sound('yougotmail'));
listen("showdesktop",E.c,_=>showdesktop());
startmenu.forEach(e=>e.tabIndex=0);
on(window,E.k,e=>{
	if(e.metaKey)t(e);
	if(e.key=="Escape"){
		foo(0);
		menus=startmenu;
		popt=false;
		fop=0;
		menus[fop].focus();
		t(e);
		return;
	}
	if(!v)return;
	let sel=menus.indexOf(document.activeElement),len=menus.length;
	if(e.key=="ArrowUp"||e.key=="ArrowDown"){
		let i=sel===-1?(e.key=="ArrowUp"?len-1:0):(sel+(e.key=="ArrowDown"?1:-1)+len)%len;
		menus[i].focus();
	}else if(e.key=="ArrowRight"&&!popt&&sel!==-1&&menus[sel].classList.contains("more")) {
		startmore({target:menus[sel],currentTarget:menus[sel],preventDefault(){},stopPropagation(){}});
		fop=sel;
		setTimeout(_=>{
			let fm=Array.from($$$("#flyout a"));
			if (fm.length) {
				fm.forEach(e=>e.tabIndex=0);
				menus=fm;popt=true;menus[0].focus();
			}
		},0);
	} else if(e.key=="ArrowLeft"&&popt) {
		foo(0);
		menus=startmenu;popt=false;
		if(fop>=0)menus[fop].focus();
	} else if(e.key=="Enter"&&sel!==-1){
		menus[sel].click();
	}
});
if(rec>0)run("recovery",{h:false,i:false,d:{x:252,y:144},
	o:_=>{listen("recoverycancel",E.c,_=>tclose("recovery"));listen("recoverycheck",E.c,_=>n("BSOD"))}})
},
	victory=_=>{
		const width=71,height=96,cwidth=width,cheight=height,cwidthhalf=cwidth/2,cheighthalf=cheight/2,card=new Image();
		let id=52;
		function PlayingCard(id,x,y,sx,sy){
			if(sx===0)sx=2;
			let cx=(id%4)*width,cy=Math.floor(id/4)*height;
			this.update=_=>{
				x+=sx;y+=sy;
				if(x<-cwidthhalf||x>canvas.width+cwidthhalf)return cards.splice(cards.indexOf(this),1),false;
				y>canvas.height-cheighthalf&&(y=canvas.height-cheighthalf,sy=-sy*0.85);
				sy+=0.98;
				lok&&ctx.drawImage(card,cx,cy,width,height,Math.floor(x-cwidthhalf),Math.floor(y-cheighthalf),cwidth,cheight);
				return true}}
		const throwCard=(x,y)=>cards.push(new PlayingCard(id>0?id--:id=51,x,y,Math.floor(Math.random()*6-3)*2,-Math.random()*16)),
			ani=_=>{let i=0,l=cards.length;while(i<l){cards[i].update()?i++:l--}requestAnimationFrame(ani)};
		card.src="https://www.windows98.website/ui/i/cards.png";
		on(document.body,E.P,e=>{throwCard(e.clientX,e.clientY)});
		on(document.body,E.V,e=>{if(e.pressure===0)return;throwCard(e.clientX,e.clientY)});
		noesc();
		lok&&requestAnimationFrame(ani)
	},
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
			shutdown();n("windows")
		})},
	poweroff=_=>{
		shutdown();
		sound("logoff");
		document.body.style.cursor='wait';
		let b=$("boot").style;
		b.visibility="visible";
		$("sdmsg").style.display="block";
		setTimeout(_=>{
			b.visibility="hidden";
			$("poweroff").style.display="block";
			$("shutdowntext").style.display="block";
			document.body.style.cursor='auto';
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
		let p=e.target.value.split('WINDOWS> ').pop(),m=errs[Math.random()*errs.length|0];
		if(p.includes('help'))m="bwahahaha! there's no help here.";
		if(p.includes('quit'))m="quitters never win.";
		if(p.includes('shutdown'))n("poweroff");
		if(p.includes('reboot')){
			shutdown();
			$("shutdowntext").style.display="none";
			$("sdmsg").style.display="none";
			n("boot")
		};
		e.target.value+=`\n${m}\n\nC:\\WINDOWS> `;
		promptfocus(e.target)},
	promptfocus=d=>(setTimeout(_=>{
		d.style.display="block";
		d.focus();
		d.setSelectionRange(d.value.length,d.value.length),d.scrollTop=d.scrollHeight;
	},1000)),
	prompt=i=>on(i,E.k,cmdPrompt),
	msdos=_=>{
		sound("logoff");
		shutdown();
		document.body.style.cursor='wait';
		let b=$("boot").style;
		b.visibility="visible";
		$("sdmsg").style.display="block";
		$("sdmsg").innerHTML="Rebooting to MS-DOS...";
		setTimeout(_=>{
			b.visibility="hidden";
			$("windows").style.visibility="hidden";
			$("poweroff").style.display="block";
			$("shutdowntext").style.display="none";
			document.body.style.cursor='auto';
			clearTimeout(this)
			prompt(dp);
			promptfocus(dp);
		},2000)},
	boot=_=>setTimeout(_=>{n("windows");clearTimeout(this)},2000);
	//let's boot up!
	let v=!1,eyes=[],tasks=[],cards=[],ctx=canvas.getContext("2d"),totalMinutes=369426,rec=0,lok=0,menus=startmenu,popt=false,fop=-1;
	menus.forEach(m=>m.onmouseenter=_=>m.focus());
	n("boot");
	time();setInterval(time,60000);
})();
