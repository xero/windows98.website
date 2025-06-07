(_=>{
	const apps=[
		"app-adraw",
		"app-recovery",
		"app-aohell",
		"app-bo2k",
		"app-calendar",
		"app-dos",
		"app-explorer",
		"app-help",
		"app-nero",
		"app-notepad",
		"app-mycpu",
		"app-photoshop",
		"app-putty",
		"app-dreamweaver",
		"app-regedit",
		"app-solitaire",
		"app-sub7",
		"app-utorrent",
		"app-vb6",
		"app-vstudio",
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
		U: "keyup",
		s: "submit",
		P: "pointerdown",
		V: "pointermove",
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
	sound=i=>{let a=new Audio('/ui/s/'+i+'.mp3');a.play().catch(_=>{});return a},
	w8=i=>document.body.style.cursor=i?'':'wait',
	hg=i=>cl($("wait"),"hide",!i),
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
		[...$$$('#desktop article'),$('taskbar'),$('windows')].forEach(i=>i.style.visibility="hidden");
		apps.concat("cdc","jm").forEach(a=>cl($(a),"app-hidden"))
		tn.src="/ui/i/tray-disconnected.png"},
	msg=({x,m,t,i,s,o,c}={})=>{
		let d=$("msg");
		if(x){d.close();return}
		if(s)sound("chord");
		$("dialogBody").innerHTML=m;
		$("dialogTitle").innerHTML=`<img src="/ui/i/${i||"windows-slanted"}.png"><sup>${t||"Windows98"}</sup>`;
		d.showModal();
		o?.();
		$$$('#msg .close').forEach(i=>on(i,E.c,e=>(c?.(e),d.close())))},
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
	titlebar=(e,dir,cb)=>{
		let win=$("app-"+e),
		head=win.querySelector("header,h2"),
		task=$$('#tasks > section[name="'+e+'"]'),
		a=dir?task:head,
		b=dir?head:task,
		r1=a.getBoundingClientRect(),
		r2=b.getBoundingClientRect(),
		ani=make("div");
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
			tasks.push({e,f:1,h:0,i: '/ui/i/'+(
				e==="adraw"?'msdos.png"><sup>ACiDDraw - MS-DOS':
				e==="aohell"?'aohell.png"><sup>AOHell 95 v3.0 B5':
				e==="bo2k"?'bo2k-server.png"><sup>Back Orifice 2000':
				e==="calendar"?'calendar.png"><sup>Windows Calendar':
				e==="dialup"?'modem.png"><sup>Windows98 - Dial Up':
				e==="dos"?'msdos.png"><sup>Command Prompt':
				e==="explorer"?'explorer-ico.png"><sup>My Documents':
				e==="help"?'help-ico.png"><sup>Windows Help':
				e==="ie"?'msie.png"><sup>Internet Exploder':
				e==="nero"?'nero.png"><sup>Nero Burning Rom':
				e==="notepad"?'notepad.png"><sup>Todo.txt - Notepad':
				e==="photoshop"?'photoshop.png"><sup>Untitled-1 - Photoshop':
				e==="putty"?'putty.png"><sup>PuTTY 0.68':
				e==="dreamweaver"?'dw-ico.png"><sup>Untitled-1 - Dreamweaver':
				e==="mycpu"?'mycpu.png"><sup>My Computer':
				e==="recovery"?'windows-slanted.png"><sup>Windows98 Recovery':
				e==="regedit"?'regedit.png"><sup>Registry Editor':
				e==="solitaire"?'game.png"><sup>Solitaire':
				e==="sub7"?'sub7.png"><sup>SubSeven v2.2 by mobman':
				e==="utorrent"?'utorrent.png"><sup>µtorrent v1.3':
				e==="vb6"?'vb6.png"><sup>Visual Basic v6.0':
				e==="vstudio"?'vstudio.png"><sup>test.cpp - Microsoft Visual Studio C++':
				e==="winamp"?'winamp.png"><sup>WinAmp':
				e==="wsftp"?'ws_ftp.png"><sup>WS_FTP95 Pro':
				e==="xircon"?'xircon.png"><sup>xIRCon v1.0b4':
				'')});tfocus(e)}
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
			popt=0;
			menus=startmenu;
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
	time=_=>{
		cal($('cal'));
		setInterval(_=>{
			let now=new Date();
			tclock.innerHTML=`${now.getHours()%12||12}<span class="blink">:</span>${now.getMinutes().toString().padStart(2,"0")} ${now.getHours()>=12?"PM":"AM"}`
		},6000);
	},
	eject=_=>{try{let c=0,col=Player.cdromCollection;while(c<col.count)col.item(c++).eject()}catch{}},
	closeAll=(sel,fn)=>$$$(sel+" .close").forEach(b=>on(b,E.c,fn)),
	run=(a,{i,h,o,c,m,d,b,x}={})=>{
		const fn=e=>{
			topen(a);
			if(d)on($(a+"title"),E.m,e=>tdrag(e,a,d.x,d.y));
			$(a+"exit")&&c!==false&&on(a+"exit",E.c,e=>(p0p(e),tclose(a),typeof c=="function"&&c()));
			$(a+"min")&&m!==false&&on(a+"min",E.c,e=>(p0p(e),tmin(a),typeof m=="function"&&m()));
			$(a+"body")&&b!==false&&on(a+"body",E.c,_=>n("BSOD"));
			o?.(e);x?.(e);
		};
		if(i!==false)on(a,E.c,e=>(p0p(e),unselect(),cl($(a),"selected")));
		h===false?fn():on(a,typeof h=="string"?h:E.d,fn);
	},
	ico=(a,d)=>{
		$$$(a+' .ico').forEach(i=>{
			on(i,E.c,e=>(p0p(e),unselect(),cl(i,"selected")));
			on(i,E.d,d)
		})},
	cdrom=_=>msg({
		m:'<div class="pad"><aside><img style="user-select:none" src="/ui/i/insert-cd.gif"></aside><section>Error reading drive E:\\</p><p>Please insert a CD ROM and try again</p><section class="field-row"><button class="close">Eject</button></section></div>',
		c:eject,
		s:1,
	}),
	floppy=_=>msg({
		m:'<div class="pad"><aside><img style="transform:scale(1);user-select:none" src="/ui/i/insert-floppy.png"></aside><section>A:\\ is not accessible.</p><p>The device is not ready.</section><section class="field-row"><button class="close">OK</button></section></div>',
		c:_=>n("BSOD"),
		s:1,
	}),
	alttab=$("alttab"),
	taskinfo=task=>{
		let img,title='';
		img=`<img src="${task.i.replace(/"><sup>.*/, '')}">`;
		title=(task.i.match(/<sup>(.*)/)||[])[1]||task.e.replace(/^app-/, '');
		if(!title)title=task.e.replace(/^app-/,'');
		return {img,title};
	},
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
		cl(alttab,"off",1);
	},
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
				(fo.innerHTML='<ul><li class="act">This website is by:</li><li><a class="x0" href="https://x-e.ro" target="_blank">xero harrison</a></li><li><a class="sauce" href="https://github.com/xero/windows98.website" target="_blank">view the source code</a></li></ul>',
					Object.assign(fo.style,{color:"#000",textShadow:"none",height:"auto",width:"auto",padding:"0"}),
					foh())
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
					foh())
				break;
			case "settings":
				(fo.innerHTML='<ul><li id="fs"><a class="fs">Toggle Full Screen</a></li><li id="crt"><a class="crt">Toggle CRT Effects</a></li></ul>',
					Object.assign(fo.style,{color:"#000",textShadow:"none",height:"auto",width:"auto",padding:"0"}),
					foh(1))
				break;
			default:
				(fo.innerHTML='<ul><li class="disabled"><a class="disabled">(None)</a></li></ul>',
					Object.assign(fo.style,{height:"auto",width:"auto",padding:"0"}),
					foh())
				break;
		}
		$$$("#flyout a").forEach(e=>e.tabIndex=0);
	},
	cal=el=>{
		let mS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
		dS="SMTWTFS".split(""),
		yS=[],d=new Date(),m=d.getMonth(),y=99,
		s=make("section");
		s.className="cal";
		let ms=make("select");
		ms.name="m";
		mS.forEach((v,i)=>{let o=make("option");o.value=i;o.textContent=v;ms.appendChild(o)});
		ms.selectedIndex=m;
		for(let i=1970;i<=1999;i++)yS.push(i);
		let ys=make("input");
		ys.type="number";ys.name="y";ys.min=1970;ys.max=1999;ys.value=1999;
		let g=make("div");
		g.className="cal-grid";
		fill=_=>{
			let mo=+ms.value,yr=+ys.value,fd=new Date(yr,mo,1).getDay(),dm=new Date(yr,mo+1,0).getDate(),c="",td=d.getDate();
			c+=dS.map(x=>`<div class="cal-head">${x}</div>`).join("");
			for(let i=0;i<fd;i++)c+='<div class="cal-cell"></div>';
			for(let i=1;i<=dm;i++)c+=`<div class="cal-cell${i==td?" today":""}">${i}</div>`;
			let rem=(fd+dm)%7;if(rem)for(let i=rem;i<7;i++)c+='<div class="cal-cell"></div>';
			g.innerHTML=c;
		}
		fill();
		ms.onchange=ys.onchange=fill;
		s.appendChild(ms);s.appendChild(ys);s.appendChild(g);
		el.appendChild(s);
	},
	clock=s=>{
		let i,a=6,h=$("hr").style,m=$("mn").style,c=$("sc").style,t=$("thetime");
		s?i=setInterval(_=>{
			let d=new Date,x=d.getHours()*30,y=d.getMinutes()*a,z=d.getSeconds()*a;
			h.transform=`rotateZ(${x+y/12}deg)`;
			m.transform=`rotateZ(${y}deg)`;
			c.transform=`rotateZ(${z}deg)`;
			t.value=(h=d.getHours()%12||12)+' : '+(m=d.getMinutes()).toString().padStart(2,0)+' : '+(s=d.getSeconds()).toString().padStart(2,0)+' '+(d.getHours()<12?'AM':'PM');
		}):clearInterval(i)},
	beginAni=(d=$('begin'),k=[[0,80],[.4,0],[.6,15],[.72,0],[.82,4],[.9,0],[.96,1],[1,0]],t=2500,s=performance.now())=>{
		 d.style.display = "block";
		(a=>a(a,s))(function f(self,s) {
			const e=(performance.now()-s)/t,
			i=k.findIndex(([p])=>e<=p),
			[p1,m1]=k[i-1]||k[0],
			[p2,m2]=k[i]||k[k.length-1],
			l=(e-p1)/(p2-p1),
			m=m1+(m2-m1)*l;
			d.style.marginLeft=m+"%";
			e<1?requestAnimationFrame(()=>self(self,s)):d.style.marginLeft="0%";
	})},
	flicker=_=>{
		hg();
		$("taskbar").style.visibility="hidden";
		let a=$("desktop").querySelectorAll("article"),i=0,n=2*Math.floor(2+Math.random()*2);
		a.forEach(e=>e.style.visibility="hidden");
		setTimeout(_=>{
			$("taskbar").style.visibility="visible";
			sound('startup');
			setTimeout(f=_=>{
				a.forEach(e=>e.style.visibility=i%2?"visible":"hidden");
				if(++i<n)setTimeout(f,100);
				else{hg(1);
						if(rec>0) run("recovery",{h:false,i:false,d:{x:252,y:144},o:_=>{on("recoverycancel",E.c,_=>tclose("recovery"));on("recoverycheck",E.c,_=>n("BSOD"))}});
						else beginAni();
					}}
				,1200)}
			,1000)},
	timer=s=>{
		s ? dlt=setInterval(_=>{
			totalMinutes+=Math.floor(2880+Math.random()*(480));
			$("dltime").innerHTML=
				Math.floor(totalMinutes/1440)+" Days, "+
					Math.floor(totalMinutes%1440/60)+" hours, "+
					totalMinutes%60+" minutes";
		},5e3):clearInterval(dlt)},
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
			n("boot")
		};
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
	boot=_=>setTimeout(_=>{n("windows");clearTimeout(this)},2000),
	windows=_=>{
		lok=0;
		flicker();
		canvas.style.display="block";
		canvas.width=ctx.canvas.clientWidth;
		canvas.height=ctx.canvas.clientHeight;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		["adraw","nero"].forEach(a=>run(a,{
			d:{x:1,y:1}}));
		run("aohell",{
			d:{x:39,y:30}});
		run("bo2k",{
			d:{x:251,y:174},
			o:_=>cl($("cdc"),"app-hidden",1),
			x:_=>{
				on("bo2kok",E.c,e=>(p0p(e),n("BSOD")));
				on("bo2kclose",E.c,e=>(p0p(e),tclose("bo2k")))}});
		run("calendar",{
			d:{x:192,y:178},
			o:_=>clock(1),
			x:_=>{clock(0);on("app-calendar",E.s,e=>(p0p(e),tclose("calendar")))}});
		on(tclock,E.c,_=>{
			run("calendar",{
				i:false,
				h:false,
				d:{x:192,y:178},
				o:_=>clock(1),
				x:_=>{clock(0);on("app-calendar",E.s,e=>(p0p(e),tclose("calendar")))}})});
		run("dreamweaver",{
			d:{x:222,y:149},
			x:_=>$$$("#app-dreamweaver img").forEach(i=>on(i,E.c,_=>n("BSOD")))});
		run("explorer",{
			d:{x:248,y:162},
			b:false,
			x:_=>ico("#app-explorer",_=>n("BSOD"))});
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
		run("putty",{
			d:{x:249,y:146},
			b:false,
			o:_=>{let p=$("puttycli");promptfocus(p);prompt(p)}});
		run("photoshop",{
			d:{x:140,y:100},
			b:false,
			m:_=>p.blur(),
			c:_=>p.blur(),
			x:_=>on("app-photoshop",E.c,_=>p.click())});
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
			x:_=>on("utorrentcancel",E.c,e=>(p0p(e),tclose("utorrent"),timer(0)))});
		run("vb6",{
			d:{x:60,y:44}});
		run("vstudio",{
			b:false,
			d:{x:354,y:195},
			o:_=>on("vstudioctrls",E.c,_=>n("BSOD"))});
		run("winamp",{
			d:{x:1,y:1},
			b:false,
			x:_=>on($("winampbody"),E.c,e=>(p0p(e),sound("winamp")))});
		run("wsftp",{
			d:{x:280,y:188},
			b:false,
			o:_=>promptfocus($("wsftplog"),1),
			x:_=>on("app-wsftp",E.s,e=>(p0p(e),n("BSOD")))});
		run("xircon",{
			d:{x:60,y:38}});
		on("spewfy",E.d,_=>{
			msg({
				i:"sine",t:"Dr Spewfy",s:1,
				o:_=>cl($("jm"),"app-hidden",1),
				m:`<div class="pad"><aside><img style="transform:scale(1);user-select:none;margin-top:-10px" src="/ui/i/err.png"></aside><section>Can't load (or register) custom control 'COMCTL32.OCX'</section><section class="field-row"><button class="close">OK</button></section></div>`})});
		on("cd",E.d,cdrom);
		on("disks",E.d,floppy);
		on("msie",E.d,e=>{
			p0p(e);
			topen("ie");
			ctx=canvas.getContext("2d");
			ctx.drawImage(img,canvas.width/2-300,canvas.height/2-135);
			noesc();
			on(document.body,E.v,e=>ctx.drawImage(img,e.clientX-300,e.clientY-25));
			on(document.body,E.d,_=>n("BSOD"));
		});
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
				m:'<img id="dialupani" width="347" height="144" src="/ui/i/dialing.gif"><p id="lbldialup">Dialing up clover.net... 740-284-0003</p><div class="progress"><span id="dialupbar" style="width: 0%;"> </span></div></p><section class="field-row"><button id="btndialup" class="close">Cancel</button></section>',
				c:_=>{a.pause(),clearInterval(l),tclose(id)},
				o:_=>{d=$("dialupbar").style},
				t:"Windows98 - Dial-Up",
				i:"modem",
			});
		});
		on("game",E.d,_=>{
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
		on("start",E.c,t);
		run("help",{
			h:E.c,
			i:false,
			d:{x:219,y:150},
			o:_=>t(fe),
			x:_=>on("helpmenu",E.c,_=>n("BSOD")),
		});
		run("dos",{
			h:E.c,
			i:false,
			d:{x:1,y:1},
			o:_=>{let d=$("dinput");prompt(d);promptfocus(d);t(fe)},
		});
		on("logoff",E.c,i=>{
			let d=$("msg");
			t(i);
			msg({
				m:'<aside><img src="/ui/i/logoff.png"></aside><section><p>Are your sure you want to log off?</p><section class="field-row"><button id="loconfim">Yes</button><button class="close">No</button></section>',
				o:_=>{
					on("loconfim",E.c,_=>{
						msg({x:1});
						sound("logoff");
						hg();
						shutdown();
						$("windows").style.visibility="hidden";
						document.body.style.background="#018281";
						setTimeout(_=>{hg(1);msg({
							m:'<div id="logon"><form><aside><img src="/ui/i/mycpu.png"></aside><section><p>Enter your network password for Microsoft Networking</p><section class="field-row"><label for="user"><u>U</u>ser Name</label><input id="user" type="text" value="xeR0"></section><section class="field-row"><label for="pw"><u>P</u>assword&nbsp;</label><input id="pw" type="password"></section><br/><br/><br/><section class="field-row" id="frmErr">&nbsp;</section></section><aside><section class="field-row"><button type="submit">OK</button></section><section class="field-row"><button type="button" disabled>Cancel</button></section></aside></form></div>',
							o:_=>on("logon",E.s,e=>{p0p(e);
								(!$("pw").value)?
									$("frmErr").innerHTML="Enter your password":
									(msg({x:1}),n("windows"),document.body.style.background="#222")})})},
						1000)})}})});
		on("shutdown",E.c,e=>{
			t(e);
			msg({
				m:`<form id="frmSd"><aside><img src="/ui/i/shutdown.png"></aside><section><p>What do you want your computer to do?</p><section class="field-row aleft"><input id="r1" type="radio" name="shutdownopt"><label for="r1">S<u>t</u>and By</label></section><section class="field-row aleft"><input id="r2" type="radio" name="shutdownopt"><label for="r2"><u>S</u>hutdown</label></section><section class="field-row aleft"><input id="r3" type="radio" name="shutdownopt"><label for="r3"><u>R</u>estart</label></section><section class="field-row aleft"><input id="r4" type="radio" name="shutdownopt"><label for="r4">Restart in <u>M</u>S-DOS mode</label></section><section class="field-row aleft"><button type="submit">OK</button><button class="close">Cancel</button><button class="help">Help</button></section></form>`,
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
				showctx("appmenu",e,20,27);
			})});
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
				foo(0);
				menus=startmenu;popt=fop=0;
				menus[fop].focus();t(e);return
			}
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
				ata=ati=0}})};
	//let's boot up!
	let v=0,eyes=[],tasks=[],cards=[],ctx=canvas.getContext("2d"),totalMinutes=369426,rec=0,lok=0,menus=startmenu,popt=0,fop=-1,ata=0,ati=0;
	menus.forEach(m=>m.onmouseenter=_=>m.focus());
	$$$('input,textarea').forEach(e=>['autocomplete','autocorrect','autocapitalize'].forEach(a=>e.setAttribute(a,'off'))||e.setAttribute('spellcheck','false'));
	n("boot");
	time();
})();
