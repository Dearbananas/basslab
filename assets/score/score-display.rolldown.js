const LIB_WEBMSCORE_VERSION = "4.6.5-1";
//#region \0rolldown/runtime.js
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
//#endregion
//#region node_modules/vue/dist/vue.esm-browser.prod.js
/**
* vue v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function h(e) {
	let t = Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
function G(e) {
	if (T(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = N(r) ? Y(r) : G(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (N(e) || E(e)) return e;
}
function Y(e) {
	let t = {};
	return e.replace(Z, "").split(X).forEach((e) => {
		if (e) {
			let n = e.split(Q);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function ee(e) {
	let t = "";
	if (N(e)) t = e;
	else if (T(e)) for (let n = 0; n < e.length; n++) {
		let r = ee(e[n]);
		r && (t += r + " ");
	}
	else if (E(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
function et(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !N(t) && (e.class = ee(t)), n && (e.style = G(n)), e;
}
function eo(e, t) {
	let n, r;
	if (e === t) return !0;
	let i = "[object Date]" === (n = e, I.call(n)), l = "[object Date]" === (r = t, I.call(r));
	if (i || l) return !!i && !!l && e.getTime() === t.getTime();
	if (i = A(e), l = A(t), i || l) return e === t;
	if (i = T(e), l = T(t), i || l) return !!i && !!l && function(e, t) {
		if (e.length !== t.length) return !1;
		let n = !0;
		for (let r = 0; n && r < e.length; r++) n = eo(e[r], t[r]);
		return n;
	}(e, t);
	if (i = E(e), l = E(t), i || l) {
		if (!i || !l || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !eo(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function ea(e, t) {
	return e.findIndex((e) => eo(e, t));
}
function ef(e) {
	return new eh(e);
}
function eg() {
	return t;
}
function em(e, n = !1) {
	t && t.cleanups.push(e);
}
function eb(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = i, i = e;
		return;
	}
	e.next = r, r = e;
}
function eS() {
	let e;
	if (!(--e_ > 0)) {
		if (i) {
			let e = i;
			for (i = void 0; e;) {
				let t = e.next;
				e.next = void 0, e.flags &= -9, e = t;
			}
		}
		for (; r;) {
			let t = r;
			for (r = void 0; t;) {
				let n = t.next;
				if (t.next = void 0, t.flags &= -9, 1 & t.flags) try {
					t.trigger();
				} catch (t) {
					e || (e = t);
				}
				t = n;
			}
		}
		if (e) throw e;
	}
}
function ex(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function eC(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		-1 === r.version ? (r === n && (n = e), ew(r), function(e) {
			let { prevDep: t, nextDep: n } = e;
			t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
		}(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function ek(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (eT(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function eT(e) {
	if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === eM) || (e.globalVersion = eM, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !ek(e)))) return;
	e.flags |= 2;
	let t = e.dep, r = n, i = eE;
	n = e, eE = !0;
	try {
		ex(e);
		let n = e.fn(e._value);
		(0 === t.version || U(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		n = r, eE = i, eC(e), e.flags &= -3;
	}
}
function ew(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) ew(e, !0);
	}
	t || --n.sc || !n.map || n.map.delete(n.key);
}
function eN(e, t) {
	e.effect instanceof ev && (e = e.effect.fn);
	let n = new ev(e);
	t && S(n, t);
	try {
		n.run();
	} catch (e) {
		throw n.stop(), e;
	}
	let r = n.run.bind(n);
	return r.effect = n, r;
}
function eA(e) {
	e.effect.stop();
}
function eI() {
	eR.push(eE), eE = !1;
}
function eO() {
	let e = eR.pop();
	eE = void 0 === e || e;
}
function eP(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = n;
		n = void 0;
		try {
			t();
		} finally {
			n = e;
		}
	}
}
function ej(e, t, r) {
	if (eE && n) {
		let t = eL.get(e);
		t || eL.set(e, t = /* @__PURE__ */ new Map());
		let n = t.get(r);
		n || (t.set(r, n = new eD()), n.map = t, n.key = r), n.track();
	}
}
function eU(e, t, n, r, i, l) {
	let s = eL.get(e);
	if (!s) return void eM++;
	let o = (e) => {
		e && e.trigger();
	};
	if (e_++, "clear" === t) s.forEach(o);
	else {
		let i = T(e), l = i && O(n);
		if (i && "length" === n) {
			let e = Number(r);
			s.forEach((t, n) => {
				("length" === n || n === eB || !A(n) && n >= e) && o(t);
			});
		} else switch ((void 0 !== n || s.has(void 0)) && o(s.get(n)), l && o(s.get(eB)), t) {
			case "add":
				if (i) l && o(s.get("length"));
				else {
					let t;
					o(s.get(e$));
					"[object Map]" === (t = e, I.call(t)) && o(s.get(eV));
				}
				break;
			case "delete":
				if (!i) {
					let t;
					o(s.get(e$));
					"[object Map]" === (t = e, I.call(t)) && o(s.get(eV));
				}
				break;
			case "set":
				let a;
				"[object Map]" === (a = e, I.call(a)) && o(s.get(e$));
		}
	}
	eS();
}
function eH(e) {
	let t = t_(e);
	return t === e ? t : (ej(t, "iterate", eB), ty(e) ? t : t.map(tS));
}
function eq(e) {
	return ej(e = t_(e), "iterate", eB), e;
}
function eW(e, t) {
	return tm(e) ? tg(e) ? tx(tS(t)) : tx(t) : tS(t);
}
function ez(e, t, n) {
	let r = eq(e), i = r[t]();
	return r === e || ty(e) || (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
function eG(e, t, n, r, i, l) {
	let s = eq(e), o = s !== e && !ty(e), a = s[t];
	if (a !== eJ[t]) {
		let t = a.apply(e, l);
		return o ? tS(t) : t;
	}
	let c = n;
	s !== e && (o ? c = function(t, r) {
		return n.call(this, eW(e, t), r, e);
	} : n.length > 2 && (c = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = a.call(s, c, r);
	return o && i ? i(u) : u;
}
function eX(e, t, n, r) {
	let i = eq(e), l = i !== e && !ty(e), s = n, o = !1;
	i !== e && (l ? (o = 0 === r.length, s = function(t, r, i) {
		return o && (o = !1, t = eW(e, t)), n.call(this, t, eW(e, r), i, e);
	}) : n.length > 3 && (s = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let a = i[t](s, ...r);
	return o ? eW(e, a) : a;
}
function eQ(e, t, n) {
	let r = t_(e);
	ej(r, "iterate", eB);
	let i = r[t](...n);
	return (-1 === i || !1 === i) && tv(n[0]) ? (n[0] = t_(n[0]), r[t](...n)) : i;
}
function eZ(e, t, n = []) {
	eI(), e_++;
	let r = t_(e)[t].apply(e, n);
	return eS(), eO(), r;
}
function e1(e) {
	A(e) || (e = String(e));
	let t = t_(this);
	return ej(t, "has", e), t.hasOwnProperty(e);
}
function te(e) {
	return function() {
		return "delete" !== e && ("clear" === e ? void 0 : this);
	};
}
function tt(e, t) {
	let n, r = (S(n = {
		get(n) {
			let r = this.__v_raw, i = t_(r), l = t_(n);
			e || (U(n, l) && ej(i, "get", n), ej(i, "get", l));
			let { has: s } = Reflect.getPrototypeOf(i), o = t ? e7 : e ? tx : tS;
			return s.call(i, n) ? o(r.get(n)) : s.call(i, l) ? o(r.get(l)) : void (r !== i && r.get(n));
		},
		get size() {
			let t = this.__v_raw;
			return e || ej(t_(t), "iterate", e$), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = t_(n), i = t_(t);
			return e || (U(t, i) && ej(r, "has", t), ej(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, l = i.__v_raw, s = t_(l), o = t ? e7 : e ? tx : tS;
			return e || ej(s, "iterate", e$), l.forEach((e, t) => n.call(r, o(e), o(t), i));
		}
	}, e ? {
		add: te("add"),
		set: te("set"),
		delete: te("delete"),
		clear: te("clear")
	} : {
		add(e) {
			let n = t_(this), r = Reflect.getPrototypeOf(n), i = t_(e), l = t || ty(e) || tm(e) ? e : i;
			return r.has.call(n, l) || U(e, l) && r.has.call(n, e) || U(i, l) && r.has.call(n, i) || (n.add(l), eU(n, "add", l, l)), this;
		},
		set(e, n) {
			t || ty(n) || tm(n) || (n = t_(n));
			let r = t_(this), { has: i, get: l } = Reflect.getPrototypeOf(r), s = i.call(r, e);
			s || (e = t_(e), s = i.call(r, e));
			let o = l.call(r, e);
			return r.set(e, n), s ? U(n, o) && eU(r, "set", e, n) : eU(r, "add", e, n), this;
		},
		delete(e) {
			let t = t_(this), { has: n, get: r } = Reflect.getPrototypeOf(t), i = n.call(t, e);
			i || (e = t_(e), i = n.call(t, e)), r && r.call(t, e);
			let l = t.delete(e);
			return i && eU(t, "delete", e, void 0), l;
		},
		clear() {
			let e = t_(this), t = 0 !== e.size, n = e.clear();
			return t && eU(e, "clear", void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = function(...n) {
			let i, l = this.__v_raw, s = t_(l), o = "[object Map]" === (i = s, I.call(i)), a = "entries" === r || r === Symbol.iterator && o, c = l[r](...n), u = t ? e7 : e ? tx : tS;
			return e || ej(s, "iterate", "keys" === r && o ? eV : e$), S(Object.create(c), { next() {
				let { value: e, done: t } = c.next();
				return t ? {
					value: e,
					done: t
				} : {
					value: a ? [u(e[0]), u(e[1])] : u(e),
					done: t
				};
			} });
		};
	}), n);
	return (t, n, i) => "__v_isReactive" === n ? !e : "__v_isReadonly" === n ? e : "__v_raw" === n ? t : Reflect.get(k(r, n) && n in t ? r : t, n, i);
}
function tu(e) {
	return tm(e) ? e : tf(e, !1, e4, tn, ts);
}
function td(e) {
	return tf(e, !1, e5, tr, to);
}
function tp(e) {
	return tf(e, !0, e8, ti, ta);
}
function th(e) {
	return tf(e, !0, e9, tl, tc);
}
function tf(e, t, n, r, i) {
	let l;
	if (!E(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let s = i.get(e);
	if (s) return s;
	let o = function(e) {
		switch (e) {
			case "Object":
			case "Array": return 1;
			case "Map":
			case "Set":
			case "WeakMap":
			case "WeakSet": return 2;
			default: return 0;
		}
	}((l = e, I.call(l)).slice(8, -1));
	if (0 === o) return e;
	let a = new Proxy(e, 2 === o ? r : n);
	return i.set(e, a), a;
}
function tg(e) {
	return tm(e) ? tg(e.__v_raw) : !!(e && e.__v_isReactive);
}
function tm(e) {
	return !!(e && e.__v_isReadonly);
}
function ty(e) {
	return !!(e && e.__v_isShallow);
}
function tv(e) {
	return !!e && !!e.__v_raw;
}
function t_(e) {
	let t = e && e.__v_raw;
	return t ? t_(t) : e;
}
function tb(e) {
	return !k(e, "__v_skip") && Object.isExtensible(e) && q(e, "__v_skip", !0), e;
}
function tC(e) {
	return !!e && !0 === e.__v_isRef;
}
function tk(e) {
	return tw(e, !1);
}
function tT(e) {
	return tw(e, !0);
}
function tw(e, t) {
	return tC(e) ? e : new tN(e, t);
}
function tA(e) {
	e.dep && e.dep.trigger();
}
function tE(e) {
	return tC(e) ? e.value : e;
}
function tR(e) {
	return w(e) ? e() : tE(e);
}
function tO(e) {
	return tg(e) ? e : new Proxy(e, tI);
}
function tM(e) {
	return new tP(e);
}
function tF(e) {
	let t = T(e) ? Array(e.length) : {};
	for (let n in e) t[n] = new tD(e, n, void 0);
	return t;
}
function t$(e, t, n) {
	if (tC(e)) return e;
	if (w(e)) return new tL(e);
	if (!E(e) || !(arguments.length > 1)) return tk(e);
	return new tD(e, t, n);
}
function tq() {
	return d;
}
function tW(e, t = !1, n = d) {
	if (n) {
		let t = tH.get(n);
		t || tH.set(n, t = []), t.push(e);
	}
}
function tK(e, t = 1 / 0, n) {
	if (t <= 0 || !E(e) || e.__v_skip || ((n = n || /* @__PURE__ */ new Map()).get(e) || 0) >= t) return e;
	if (n.set(e, t), t--, tC(e)) tK(e.value, t, n);
	else if (T(e)) for (let r = 0; r < e.length; r++) tK(e[r], t, n);
	else {
		let r, i;
		if ("[object Set]" === (r = e, I.call(r)) || "[object Map]" === (i = e, I.call(i))) e.forEach((e) => {
			tK(e, t, n);
		});
		else {
			let r;
			if ("[object Object]" === (r = e, I.call(r))) {
				for (let r in e) tK(e[r], t, n);
				for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && tK(e[r], t, n);
			}
		}
	}
	return e;
}
function tz(e, t) {}
function tG(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		tQ(e, t, n);
	}
}
function tX(e, t, n, r) {
	if (w(e)) {
		let i = tG(e, t, n, r);
		return i && R(i) && i.catch((e) => {
			tQ(e, t, n);
		}), i;
	}
	if (T(e)) {
		let i = [];
		for (let l = 0; l < e.length; l++) i.push(tX(e[l], t, n, r));
		return i;
	}
}
function tQ(e, t, n, r = !0) {
	t && t.vnode;
	let { errorHandler: l, throwUnhandledErrorInProduction: s } = t && t.appContext.config || f;
	if (t) {
		let r = t.parent, i = t.proxy, s = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (!1 === t[n](e, i, s)) return;
			}
			r = r.parent;
		}
		if (l) {
			eI(), tG(l, null, 10, [
				e,
				i,
				s
			]), eO();
			return;
		}
	}
	(function(e, t = !0, n = !1) {
		if (n) throw e;
		console.error(e);
	})(e, r, s);
}
function t4(e) {
	let t = t6 || t3;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function t8(e) {
	if (!(1 & e.flags)) {
		let t = nt(e), n = tZ[tZ.length - 1];
		!n || !(2 & e.flags) && t >= nt(n) ? tZ.push(e) : tZ.splice(function(e) {
			let t = tY + 1, n = tZ.length;
			for (; t < n;) {
				let r = t + n >>> 1, i = tZ[r], l = nt(i);
				l < e || l === e && 2 & i.flags ? t = r + 1 : n = r;
			}
			return t;
		}(t), 0, e), e.flags |= 1, t5();
	}
}
function t5() {
	t6 || (t6 = t3.then(function e(t) {
		try {
			for (tY = 0; tY < tZ.length; tY++) {
				let e = tZ[tY];
				e && !(8 & e.flags) && (4 & e.flags && (e.flags &= -2), tG(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2));
			}
		} finally {
			for (; tY < tZ.length; tY++) {
				let e = tZ[tY];
				e && (e.flags &= -2);
			}
			tY = -1, tZ.length = 0, ne(), t6 = null, (tZ.length || t0.length) && e();
		}
	}));
}
function t9(e) {
	if (T(e)) for (let t = 0; t < e.length; t++) t0.push(e[t]);
	else t1 && -1 === e.id ? t1.splice(t2 + 1, 0, e) : 1 & e.flags || (t0.push(e), e.flags |= 1);
	t5();
}
function t7(e, t, n = tY + 1) {
	for (; n < tZ.length; n++) {
		let t = tZ[n];
		if (t && 2 & t.flags) {
			if (e && t.id !== e.uid) continue;
			tZ.splice(n, 1), n--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2);
		}
	}
}
function ne(e) {
	if (t0.length) {
		let e = [...new Set(t0)].sort((e, t) => nt(e) - nt(t));
		if (t0.length = 0, t1) {
			for (let t = 0; t < e.length; t++) t1.push(e[t]);
			return;
		}
		for (t1 = e, t2 = 0; t2 < t1.length; t2++) {
			let e = t1[t2];
			4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2;
		}
		t1 = null, t2 = 0;
	}
}
function ni(e) {
	let t = nn;
	return nn = e, nr = e && e.type.__scopeId || null, t;
}
function nl(e) {
	nr = e;
}
function ns() {
	nr = null;
}
function na(e, t = nn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		let i;
		r._d && i9(-1);
		let l = ni(t), s = i3.length;
		try {
			i = e(...n);
		} finally {
			for (let e = i3.length; e > s; e--) i8();
			ni(l), r._d && i9(1);
		}
		return i;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function nc(e, t) {
	if (null === nn) return e;
	let n = lF(nn), r = e.dirs || (e.dirs = []);
	for (let e = 0; e < t.length; e++) {
		let [i, l, s, o = f] = t[e];
		i && (w(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && tK(l), r.push({
			dir: i,
			instance: n,
			value: l,
			oldValue: void 0,
			arg: s,
			modifiers: o
		}));
	}
	return e;
}
function nu(e, t, n, r) {
	let i = e.dirs, l = t && t.dirs;
	for (let s = 0; s < i.length; s++) {
		let o = i[s];
		l && (o.oldValue = l[s].value);
		let a = o.dir[r];
		a && (eI(), tX(a, n, 8, [
			e.el,
			o,
			e,
			t
		]), eO());
	}
}
function nd(e, t) {
	if (lx) {
		let n = lx.provides, r = lx.parent && lx.parent.provides;
		r === n && (n = lx.provides = Object.create(r)), n[e] = t;
	}
}
function np(e, t, n = !1) {
	let r = lC();
	if (r || id) {
		let i = id ? id._context.provides : r ? null == r.parent || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && w(t) ? t.call(r && r.proxy) : t;
	}
}
function nh() {
	return !!(lC() || id);
}
function nm(e, t) {
	return nb(e, null, t);
}
function ny(e, t) {
	return nb(e, null, { flush: "post" });
}
function nv(e, t) {
	return nb(e, null, { flush: "sync" });
}
function n_(e, t, n) {
	return nb(e, t, n);
}
function nb(e, t, n = f) {
	let r, { immediate: i, flush: l } = n, s = S({}, n), o = t && i || !t && "post" !== l;
	if (lN) {
		if ("sync" === l) {
			let e = ng();
			r = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!o) {
			let e = () => {};
			return e.stop = m, e.resume = m, e.pause = m, e;
		}
	}
	let a = lx;
	s.call = (e, t, n) => tX(e, a, t, n);
	let c = !1;
	"post" === l ? s.scheduler = (e) => {
		iD(e, a && a.suspense);
	} : "sync" !== l && (c = !0, s.scheduler = (e, t) => {
		t ? e() : t8(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), c && (e.flags |= 2, a && (e.id = a.uid, e.i = a));
	};
	let u = function(e, t, n = f) {
		let r, i, l, s, { immediate: o, deep: a, once: c, scheduler: u, augmentJob: p, call: h } = n, g = (e) => a ? e : ty(e) || !1 === a || 0 === a ? tK(e, 1) : tK(e), y = !1, _ = !1;
		if (tC(e) ? (i = () => e.value, y = ty(e)) : tg(e) ? (i = () => g(e), y = !0) : T(e) ? (_ = !0, y = e.some((e) => tg(e) || ty(e)), i = () => e.map((e) => tC(e) ? e.value : tg(e) ? g(e) : w(e) ? h ? h(e, 2) : e() : void 0)) : i = w(e) ? t ? h ? () => h(e, 2) : e : () => {
			if (l) {
				eI();
				try {
					l();
				} finally {
					eO();
				}
			}
			let t = d;
			d = r;
			try {
				return h ? h(e, 3, [s]) : e(s);
			} finally {
				d = t;
			}
		} : m, t && a) {
			let e = i, t = !0 === a ? 1 / 0 : a;
			i = () => tK(e(), t);
		}
		let b = eg(), S = () => {
			r.stop(), b && b.active && x(b.effects, r);
		};
		if (c && t) {
			let e = t;
			t = (...t) => {
				let n = e(...t);
				return S(), n;
			};
		}
		let C = _ ? Array(e.length).fill(tU) : tU, k = (e) => {
			if (1 & r.flags && (r.dirty || e)) if (t) {
				let n = r.run();
				if (e || a || y || (_ ? n.some((e, t) => U(e, C[t])) : U(n, C))) {
					l && l();
					let e = d;
					d = r;
					try {
						let e = [
							n,
							C === tU ? void 0 : _ && C[0] === tU ? [] : C,
							s
						];
						C = n, h ? h(t, 3, e) : t(...e);
					} finally {
						d = e;
					}
				}
			} else r.run();
		};
		return p && p(k), (r = new ev(i)).scheduler = u ? () => u(k, !1) : k, s = (e) => tW(e, !1, r), l = r.onStop = () => {
			let e = tH.get(r);
			if (e) {
				if (h) h(e, 4);
				else for (let t of e) t();
				tH.delete(r);
			}
		}, t ? o ? k(!0) : C = r.run() : u ? u(k.bind(null, !0), !0) : r.run(), S.pause = r.pause.bind(r), S.resume = r.resume.bind(r), S.stop = S, S;
	}(e, t, s);
	return lN && (r ? r.push(u) : o && u()), u;
}
function nS(e, t, n) {
	let r, i = this.proxy, l = N(e) ? e.includes(".") ? nx(i, e) : () => i[e] : e.bind(i, i);
	w(t) ? r = t : (r = t.handler, n = t);
	let s = lk(this), o = nb(l, r.bind(i), n);
	return s(), o;
}
function nx(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
function nE(e, t, n, { o: { insert: r }, m: i }, l = 2) {
	0 === l && r(e.targetAnchor, t, n);
	let { el: s, anchor: o, shapeFlag: a, children: c, props: u } = e, d = 2 === l;
	if (d && r(s, t, n), !nC.has(e) && (!d || nT(u)) && 16 & a) for (let e = 0; e < c.length; e++) i(c[e], t, n, 2);
	d && r(o, t, n);
}
function nI(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) 1 === r.nodeType && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function nO(e, t, n, r, i = null) {
	let l = t.targetStart = n(""), s = t.targetAnchor = n("");
	return l[nk] = s, e && (r(l, e, i), r(s, e, i)), s;
}
function nF() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return rS(() => {
		e.isMounted = !0;
	}), rk(() => {
		e.isUnmounting = !0;
	}), e;
}
function nV(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== i1) {
			t = n;
			break;
		}
	}
	return t;
}
function nj(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = Object.create(null), n.set(t.type, r)), r;
}
function nU(e, t, n, r, i) {
	let { appear: l, mode: s, persisted: o = !1, onBeforeEnter: a, onEnter: c, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: p, onLeave: h, onAfterLeave: f, onLeaveCancelled: g, onBeforeAppear: m, onAppear: y, onAfterAppear: _, onAppearCancelled: b } = t, S = String(e.key), x = nj(n, e), C = (e, t) => {
		e && tX(e, r, 9, t);
	}, k = (e, t) => {
		let n = t[1];
		C(e, t), T(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, w = {
		mode: s,
		persisted: o,
		beforeEnter(t) {
			let r = a;
			if (!n.isMounted) if (!l) return;
			else r = m || a;
			t[nP] && t[nP](!0);
			let i = x[S];
			i && lr(e, i) && i.el[nP] && i.el[nP](), C(r, [t]);
		},
		enter(t) {
			if (x[S] === e) return;
			let r = c, i = u, s = d;
			if (!n.isMounted) if (!l) return;
			else r = y || c, i = _ || u, s = b || d;
			let o = !1;
			t[nM] = (e) => {
				o || (o = !0, e ? C(s, [t]) : C(i, [t]), w.delayedLeave && w.delayedLeave(), t[nM] = void 0);
			};
			let a = t[nM].bind(null, !1);
			r ? k(r, [t, a]) : a();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[nM] && t[nM](!0), n.isUnmounting) return r();
			C(p, [t]);
			let l = !1;
			t[nP] = (n) => {
				l || (l = !0, r(), n ? C(g, [t]) : C(f, [t]), t[nP] = void 0, x[i] === e && delete x[i]);
			};
			let s = t[nP].bind(null, !1);
			x[i] = e, h ? k(h, [t, s]) : s();
		},
		clone(e) {
			let l = nU(e, t, n, r, i);
			return i && i(l), l;
		}
	};
	return w;
}
function nH(e) {
	if (ru(e)) return (e = lu(e)).children = null, e;
}
function nq(e) {
	if (!ru(e)) return e.type.__isTeleport && e.children ? nV(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (16 & t) return n[0];
		if (32 & t && w(n.default)) return n.default();
	}
}
function nW(e, t) {
	if (6 & e.shapeFlag && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		nW(n.type.__isTeleport && nq(n) || n, t);
	} else 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function nK(e, t = !1, n) {
	let r = [], i = 0;
	for (let l = 0; l < e.length; l++) {
		let s = e[l], o = null == n ? s.key : String(n) + String(null != s.key ? s.key : l);
		s.type === iY ? (128 & s.patchFlag && i++, r = r.concat(nK(s.children, t, o))) : (t || s.type !== i1) && r.push(null != o ? lu(s, { key: o }) : s);
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
function nz(e, t) {
	return w(e) ? S({ name: e.name }, t, { setup: e }) : e;
}
function nJ() {
	let e = lC();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function nG(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function nX(e) {
	let t = lC(), n = tT(null);
	return t && Object.defineProperty(t.refs === f ? t.refs = {} : t.refs, e, {
		enumerable: !0,
		get: () => n.value,
		set: (e) => n.value = e
	}), n;
}
function nQ(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
function nY(e, t, n, r, i = !1) {
	if (T(e)) return void e.forEach((e, l) => nY(e, t && (T(t) ? t[l] : t), n, r, i));
	if (ro(r) && !i) {
		512 & r.shapeFlag && r.type.__asyncResolved && r.component.subTree.component && nY(e, t, n, r.component.subTree);
		return;
	}
	let l = 4 & r.shapeFlag ? lF(r.component) : r.el, s = i ? null : l, { i: o, r: a } = e, c = t && t.r, u = o.refs === f ? o.refs = {} : o.refs, d = o.setupState, p = t_(d), h = d === f ? y : (e) => !nQ(u, e) && k(p, e), g = (e, t) => !(t && nQ(u, t));
	if (null != c && c !== a && (n0(t), N(c) ? (u[c] = null, h(c) && (d[c] = null)) : tC(c) && (g(c, t.k) && (c.value = null), t.k && (u[t.k] = null))), w(a)) tG(a, o, 12, [s, u]);
	else {
		let t = N(a), r = tC(a);
		if (t || r) {
			let o = () => {
				if (e.f) {
					let n = t ? h(a) ? d[a] : u[a] : g() || !e.k ? a.value : u[e.k];
					if (i) T(n) && x(n, l);
					else if (T(n)) n.includes(l) || n.push(l);
					else if (t) u[a] = [l], h(a) && (d[a] = u[a]);
					else {
						let t = [l];
						g(a, e.k) && (a.value = t), e.k && (u[e.k] = t);
					}
				} else t ? (u[a] = s, h(a) && (d[a] = s)) : r && (g(a, e.k) && (a.value = s), e.k && (u[e.k] = s));
			};
			if (s) {
				let t = () => {
					o(), nZ.delete(e);
				};
				t.id = -1, nZ.set(e, t), iD(t, n);
			} else n0(e), o();
		}
	}
}
function n0(e) {
	let t = nZ.get(e);
	t && (t.flags |= 8, nZ.delete(e));
}
function n4(e) {
	let { mt: t, p: n, o: { patchProp: r, createText: i, nextSibling: l, parentNode: s, remove: o, insert: a, createComment: c } } = e, u = (n, r, o, c, _, b = !1) => {
		b = b || !!r.dynamicChildren;
		let S = n6(n) && "[" === n.data, x = () => f(n, r, o, c, _, S), { type: C, ref: k, shapeFlag: T, patchFlag: w } = r, N = n.nodeType;
		r.el = n, -2 === w && (b = !1, r.dynamicChildren = null);
		let A = null;
		switch (C) {
			case i0:
				3 !== N ? "" === r.children ? (a(r.el = i(""), s(n), n), A = n) : A = x() : (n.data !== r.children && (n2(), n.data = r.children), A = l(n));
				break;
			case i1:
				y(n) ? (A = l(n), m(r.el = n.content.firstChild, n, o)) : A = 8 !== N || S ? x() : l(n);
				break;
			case i2:
				if (S && (N = (n = l(n)).nodeType), 1 === N || 3 === N) {
					A = n;
					let e = !r.children.length;
					for (let t = 0; t < r.staticCount; t++) e && (r.children += 1 === A.nodeType ? A.outerHTML : A.data), t === r.staticCount - 1 && (r.anchor = A), A = l(A);
					return S ? l(A) : A;
				}
				x();
				break;
			case iY:
				A = S ? h(n, r, o, c, _, b) : x();
				break;
			default: if (1 & T) A = 1 === N && r.type.toLowerCase() === n.tagName.toLowerCase() || y(n) ? d(n, r, o, c, _, b) : x();
			else if (6 & T) {
				r.slotScopeIds = _;
				let e = s(n);
				if (A = S ? g(n) : n6(n) && "teleport start" === n.data ? g(n, n.data, "teleport end") : l(n), t(r, e, null, o, c, n3(e), b), ro(r) && !r.type.__asyncResolved) {
					let t;
					S ? (t = la(iY)).anchor = A ? A.previousSibling : e.lastChild : t = 3 === n.nodeType ? ld("") : la("div"), t.el = n, r.component.subTree = t;
				}
			} else 64 & T ? A = 8 !== N ? x() : r.type.hydrate(n, r, o, c, _, b, e, p) : 128 & T && (A = r.type.hydrate(n, r, o, c, n3(s(n)), _, b, e, u));
		}
		return null != k && nY(k, null, c, r), A;
	}, d = (e, t, n, i, l, s) => {
		s = s || !!t.dynamicChildren;
		let { type: a, dynamicProps: c, props: u, patchFlag: d, shapeFlag: h, dirs: f, transition: g } = t, b = "input" === a || "option" === a, S = !!c;
		if (b || S || -1 !== d) {
			let a;
			f && nu(t, null, n, "created");
			let T = !1;
			if (y(e)) {
				T = iU(null, g) && n && n.vnode.props && n.vnode.props.appear;
				let r = e.content.firstChild;
				if (T) {
					let e = r.getAttribute("class");
					e && (r.$cls = e), g.beforeEnter(r);
				}
				m(r, e, n), t.el = e = r;
			}
			if (16 & h && !(u && (u.innerHTML || u.textContent))) {
				let r = p(e.firstChild, t, e, n, i, l, s);
				for (r && !n7(e, 1) && n2(); r;) {
					let e = r;
					r = r.nextSibling, o(e);
				}
			} else if (8 & h) {
				let n = t.children;
				`
` === n[0] && ("PRE" === e.tagName || "TEXTAREA" === e.tagName) && (n = n.slice(1));
				let { textContent: r } = e;
				r !== n && r !== n.replace(/\r\n|\r/g, `
`) && (n7(e, 0) || n2(), e.textContent = t.children);
			}
			if (u) {
				if (b || S || !s || 48 & d) {
					let t = e.tagName.includes("-"), i = e.namespaceURI.includes("svg") ? "svg" : e.namespaceURI.includes("MathML") ? "mathml" : void 0;
					for (let l in u) if (b && (l.endsWith("value") || "indeterminate" === l) || _(l) && !P(l) || "." === l[0] || t && !P(l) || c && c.includes(l)) {
						var x, C, k;
						if (x = e, C = l, k = u[l], n8.has(C) && x.getAttribute(C) === (null == k ? null : `${k}`)) continue;
						r(e, l, null, u[l], i, n);
					}
				} else if (u.onClick) r(e, "onClick", null, u.onClick, void 0, n);
				else if (4 & d && tg(u.style)) for (let e in u.style) u.style[e];
			}
			(a = u && u.onVnodeBeforeMount) && lv(a, n, t), f && nu(t, null, n, "beforeMount"), ((a = u && u.onVnodeMounted) || f || T) && iQ(() => {
				a && lv(a, n, t), T && g.enter(e), f && nu(t, null, n, "mounted");
			}, i);
		}
		return e.nextSibling;
	}, p = (e, t, r, s, o, c, d) => {
		d = d || !!t.dynamicChildren;
		let p = t.children, h = p.length, f = !1;
		for (let t = 0; t < h; t++) {
			let g = d ? p[t] : p[t] = lf(p[t]), m = g.type === i0;
			e ? (m && !d && t + 1 < h && lf(p[t + 1]).type === i0 && (a(i(e.data.slice(g.children.length)), r, l(e)), e.data = g.children), e = u(e, g, s, o, c, d)) : m && !g.children ? a(g.el = i(""), r) : (!f && (f = !0, n7(r, 1) || n2()), n(null, g, r, null, s, o, n3(r), c));
		}
		return e;
	}, h = (e, t, n, r, i, o) => {
		let { slotScopeIds: u } = t;
		u && (i = i ? i.concat(u) : u);
		let d = s(e), h = p(l(e), t, d, n, r, i, o);
		return h && n6(h) && "]" === h.data ? l(t.anchor = h) : (n2(), a(t.anchor = c("]"), d, h), h);
	}, f = (e, t, r, i, a, c) => {
		var u, d, p;
		if (u = e, d = t, n7(u.parentElement, 1) || 1 === (p = u).nodeType && re(p.getAttribute(n5), 1) || function({ props: e }) {
			let t = e && e[n5];
			return "string" == typeof t && re(t, 1);
		}(d) || n2(), t.el = null, c) {
			let t = g(e);
			for (;;) {
				let n = l(e);
				if (n && n !== t) o(n);
				else break;
			}
		}
		let h = l(e), f = s(e);
		return o(e), n(null, t, f, h, r, i, n3(f), a), r && (r.vnode.el = t.el, iC(r, t.el)), h;
	}, g = (e, t = "[", n = "]") => {
		let r = 0;
		for (; e;) if ((e = l(e)) && n6(e) && (e.data === t && r++, e.data === n)) if (0 === r) return l(e);
		else r--;
		return e;
	}, m = (e, t, n) => {
		let r = t.parentNode;
		r && r.replaceChild(e, t);
		let i = n;
		for (; i;) i.vnode.el === t && (i.vnode.el = i.subTree.el = e), i = i.parent;
	}, y = (e) => 1 === e.nodeType && "TEMPLATE" === e.tagName;
	return [(e, t) => {
		if (!t.hasChildNodes()) {
			n(null, e, t), ne(), t._vnode = e;
			return;
		}
		u(t.firstChild, e, null, null, null), ne(), t._vnode = e;
	}, u];
}
function n7(e, t) {
	if (0 === t || 1 === t) for (; e && !e.hasAttribute(n5);) e = e.parentElement;
	return re(e && e.getAttribute(n5), t);
}
function re(e, t) {
	if (null == e) return !1;
	{
		if ("" === e) return !0;
		let n = e.split(",");
		return !!(0 === t && n.includes("children")) || n.includes(n9[t]);
	}
}
function ra(e) {
	let t;
	w(e) && (e = { loader: e });
	let { loader: n, loadingComponent: r, errorComponent: i, delay: l = 200, hydrate: s, timeout: o, suspensible: a = !0, onError: c } = e, u = null, d = 0, p = () => {
		let e;
		return u || (e = u = n().catch((e) => {
			if (e = e instanceof Error ? e : Error(String(e)), c) return new Promise((t, n) => {
				c(e, () => t((d++, u = null, p())), () => n(e), d + 1);
			});
			throw e;
		}).then((n) => e !== u && u ? u : (n && (n.__esModule || "Module" === n[Symbol.toStringTag]) && (n = n.default), t = n, n)));
	};
	return nz({
		name: "AsyncComponentWrapper",
		__asyncLoader: p,
		__asyncHydrate(e, n, r) {
			let i = e.isConnected, l = !1;
			(n.bu || (n.bu = [])).push(() => l = !0);
			let o = () => {
				l || e.parentNode && (!i || e.isConnected) && r();
			}, a = s ? () => {
				let t = s(o, (t) => (function(e, t) {
					if (n6(e) && "[" === e.data) {
						let n = 1, r = e.nextSibling;
						for (; r;) {
							if (1 === r.nodeType) {
								if (!1 === t(r)) break;
							} else if (n6(r)) if ("]" === r.data) {
								if (0 == --n) break;
							} else "[" === r.data && n++;
							r = r.nextSibling;
						}
					} else t(e);
				})(e, t));
				t && (n.bum || (n.bum = [])).push(t);
			} : o;
			t ? a() : p().then(() => !n.isUnmounted && a());
		},
		get __asyncResolved() {
			return t;
		},
		setup() {
			let e, n, s = lx;
			if (nG(s), t) return () => rc(t, s);
			let c = (e) => {
				u = null, tQ(e, s, 13, !i);
			};
			if (a && s.suspense || lN) return p().then((e) => () => rc(e, s)).catch((e) => (c(e), () => i ? la(i, { error: e }) : null));
			let d = tk(!1), h = tk(), f = tk(!!l);
			return rT(() => {
				null != e && clearTimeout(e), null != n && clearTimeout(n);
			}), l && (n = setTimeout(() => {
				s.isUnmounted || (f.value = !1);
			}, l)), null != o && (e = setTimeout(() => {
				if (!s.isUnmounted && !d.value && !h.value) {
					let e = Error(`Async component timed out after ${o}ms.`);
					c(e), h.value = e;
				}
			}, o)), p().then(() => {
				!s.isUnmounted && (d.value = !0, s.parent && ru(s.parent.vnode) && s.parent.update());
			}).catch((e) => {
				if (s.isUnmounted) {
					u = null;
					return;
				}
				c(e), h.value = e;
			}), () => d.value && t ? rc(t, s) : h.value && i ? la(i, { error: h.value }) : r && !f.value ? rc(r, s) : void 0;
		}
	});
}
function rc(e, t) {
	let { ref: n, props: r, children: i, ce: l } = t.vnode, s = la(e, r, i);
	return s.ref = n, s.ce = l, delete t.vnode.ce, s;
}
function rp(e, t) {
	let n;
	if (T(e)) return e.some((e) => rp(e, t));
	if (N(e)) return e.split(",").includes(t);
	return "[object RegExp]" === (n = e, I.call(n)) && (e.lastIndex = 0, e.test(t));
}
function rh(e, t) {
	rg(e, "a", t);
}
function rf(e, t) {
	rg(e, "da", t);
}
function rg(e, t, n = lx) {
	let r = e.__wdc || (e.__wdc = () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (rv(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) ru(e.parent.vnode) && function(e, t, n, r) {
			let i = rv(t, e, r, !0);
			rT(() => {
				x(r[t], i);
			}, n);
		}(r, t, n, e), e = e.parent;
	}
}
function rm(e) {
	e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function ry(e) {
	return 128 & e.shapeFlag ? e.ssContent : e;
}
function rv(e, t, n = lx, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...r) => {
			eI();
			let i = lk(n), l = tX(t, n, e, r);
			return i(), eO(), l;
		});
		return r ? i.unshift(l) : i.push(l), l;
	}
}
function rE(e, t = lx) {
	rv("ec", e, t);
}
function rI(e, t) {
	return rF(rR, e, !0, t) || e;
}
function rP(e) {
	return N(e) ? rF(rR, e, !1) || e : e || rO;
}
function rM(e) {
	return rF("directives", e);
}
function rF(e, t, n = !0, r = !1) {
	let i = nn || lx;
	if (i) {
		let n = i.type;
		if (e === rR) {
			let e = lD(n, !1);
			if (e && (e === t || e === L(t) || e === B(L(t)))) return n;
		}
		let l = rD(i[e] || n[e], t) || rD(i.appContext[e], t);
		return !l && r ? n : l;
	}
}
function rD(e, t) {
	return e && (e[t] || e[L(t)] || e[B(L(t))]);
}
function rL(e, t, n, r) {
	let i, l = n && n[r], s = T(e);
	if (s || N(e)) {
		let n = s && tg(e), r = !1, o = !1;
		n && (r = !ty(e), o = tm(e), e = eq(e)), i = Array(e.length);
		for (let n = 0, s = e.length; n < s; n++) i[n] = t(r ? o ? tx(tS(e[n])) : tS(e[n]) : e[n], n, void 0, l && l[n]);
	} else if ("number" == typeof e) {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, l && l[n]);
	} else if (E(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, l && l[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, s = n.length; r < s; r++) {
			let s = n[r];
			i[r] = t(e[s], s, r, l && l[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
function r$(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (T(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
		else r && (e[r.name] = r.key ? (...e) => {
			let t = r.fn(...e);
			return t && (t.key = r.key), t;
		} : r.fn);
	}
	return e;
}
function rV(e, t, n, r, i, l) {
	let s;
	if (n ??= {}, nn.ce || nn.parent && ro(nn.parent) && nn.parent.ce) {
		let e = null != l && null == n.key ? S({}, n, { key: l }) : n, i = Object.keys(e).length > 0;
		return "default" !== t && (e.name = t), i4(), lt(iY, null, [la("slot", e, r && r())], i ? -2 : 64);
	}
	let o = e[t];
	o && o._c && (o._d = !1);
	let a = i3.length;
	i4();
	try {
		let i = o && rB(o(n)), a = n.key || l || i && i.key;
		s = lt(iY, { key: (a && !A(a) ? a : `_${t}`) + (!i && r ? "_fb" : "") }, i || (r ? r() : []), i && 1 === e._ ? 64 : -2);
	} catch (e) {
		for (let e = i3.length; e > a; e--) i8();
		throw e;
	} finally {
		o && o._c && (o._d = !0);
	}
	return !i && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), s;
}
function rB(e) {
	return e.some((e) => !ln(e) || e.type !== i1 && (e.type !== iY || !!rB(e.children))) ? e : null;
}
function rj(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : j(r)] = e[r];
	return n;
}
function rz() {
	return null;
}
function rJ() {
	return null;
}
function rG(e) {}
function rX(e) {}
function rQ() {
	return null;
}
function rZ() {}
function rY(e, t) {
	return null;
}
function r0() {
	return r2().slots;
}
function r1() {
	return r2().attrs;
}
function r2(e) {
	let t = lC();
	return t.setupContext || (t.setupContext = lM(t));
}
function r3(e) {
	return T(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function r6(e, t) {
	let n = r3(e);
	for (let e in t) {
		if (e.startsWith("__skip")) continue;
		let r = n[e];
		r ? T(r) || w(r) ? r = n[e] = {
			type: r,
			default: t[e]
		} : r.default = t[e] : null === r && (r = n[e] = { default: t[e] }), r && t[`__skip_${e}`] && (r.skipFactory = !0);
	}
	return n;
}
function r4(e, t) {
	return e && t ? T(e) && T(t) ? e.concat(t) : S({}, r3(e), r3(t)) : e || t;
}
function r8(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || Object.defineProperty(n, r, {
		enumerable: !0,
		get: () => e[r]
	});
	return n;
}
function r5(e) {
	let t = lC(), n = lN, r = e();
	lT(), n && s(!1);
	let i = () => {
		lk(t), n && s(!0);
	}, l = () => {
		lC() !== t && t.scope.off(), lT(), n && s(!1);
	};
	return R(r) && (r = r.catch((e) => {
		throw i(), Promise.resolve().then(() => Promise.resolve().then(l)), e;
	})), [r, () => {
		i(), Promise.resolve().then(l);
	}];
}
function r7(e, t, n) {
	tX(T(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ie(e) {
	let t, n = e.type, { mixins: r, extends: i } = n, { mixins: l, optionsCache: s, config: { optionMergeStrategies: o } } = e.appContext, a = s.get(n);
	return a ? t = a : l.length || r || i ? (t = {}, l.length && l.forEach((e) => it(t, e, o, !0)), it(t, n, o)) : t = n, E(n) && s.set(n, t), t;
}
function it(e, t, n, r = !1) {
	let { mixins: i, extends: l } = t;
	for (let s in l && it(e, l, n, !0), i && i.forEach((t) => it(e, t, n, !0)), t) if (r && "expose" === s);
	else {
		let r = ir[s] || n && n[s];
		e[s] = r ? r(e[s], t[s]) : t[s];
	}
	return e;
}
function ii(e, t) {
	return t ? e ? function() {
		return S(w(e) ? e.call(this, this) : e, w(t) ? t.call(this, this) : t);
	} : t : e;
}
function il(e) {
	if (T(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function is(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function io(e, t) {
	return e ? S(Object.create(null), e, t) : t;
}
function ia(e, t) {
	return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : S(Object.create(null), r3(e), r3(null != t ? t : {})) : t;
}
function ic() {
	return {
		app: null,
		config: {
			isNativeTag: y,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
function ip(e, t, n = f) {
	let r = lC(), i = L(t), l = V(t), s = ih(e, i), o = tM((s, o) => {
		let a, c, u = f;
		return nv(() => {
			let t = e[i];
			U(a, t) && (a = t, o());
		}), {
			get: () => (s(), n.get ? n.get(a) : a),
			set(e) {
				let s = n.set ? n.set(e) : e;
				if (!U(s, a) && !(u !== f && U(e, u))) return;
				let d = r.vnode.props, p = !!(d && (t in d || i in d || l in d) && (`onUpdate:${t}` in d || `onUpdate:${i}` in d || `onUpdate:${l}` in d));
				p || (a = e, o()), r.emit(`update:${t}`, s), U(e, u) && (U(e, s) && !U(s, c) || p && u !== f && !U(s, a)) && o(), u = e, c = s;
			}
		};
	});
	return o[Symbol.iterator] = () => {
		let e = 0;
		return { next: () => e < 2 ? {
			value: e++ ? s || f : o,
			done: !1
		} : { done: !0 } };
	}, o;
}
function ig(e, t, ...n) {
	let r;
	if (e.isUnmounted) return;
	let i = e.vnode.props || f, l = n, s = t.startsWith("update:"), o = s && ih(i, t.slice(7));
	o && (o.trim && (l = n.map((e) => N(e) ? e.trim() : e)), o.number && (l = n.map(W)));
	let a = i[r = j(t)] || i[r = j(L(t))];
	!a && s && (a = i[r = j(V(t))]), a && tX(a, e, 6, l);
	let c = i[r + "Once"];
	if (c) {
		if (e.emitted) {
			if (e.emitted[r]) return;
		} else e.emitted = {};
		e.emitted[r] = !0, tX(c, e, 6, l);
	}
}
function iy(e, t) {
	return !!e && !!_(t) && (k(e, (t = "Once" === (t = t.slice(2)) ? t : t.replace(/Once$/, ""))[0].toLowerCase() + t.slice(1)) || k(e, V(t)) || k(e, t));
}
function iv(e) {
	let t, n, { type: r, vnode: i, proxy: l, withProxy: s, propsOptions: [o], slots: a, attrs: c, emit: u, render: d, renderCache: p, props: h, data: f, setupState: g, ctx: m, inheritAttrs: y } = e, _ = ni(e);
	try {
		if (4 & i.shapeFlag) {
			let e = s || l;
			t = lf(d.call(e, e, p, h, g, f, m)), n = c;
		} else t = lf(r.length > 1 ? r(h, {
			attrs: c,
			slots: a,
			emit: u
		}) : r(h, null)), n = r.props ? c : i_(c);
	} catch (n) {
		i3.length = 0, tQ(n, e, 1), t = la(i1);
	}
	let S = t;
	if (n && !1 !== y) {
		let e = Object.keys(n), { shapeFlag: t } = S;
		e.length && 7 & t && (o && e.some(b) && (n = ib(n, o)), S = lu(S, n, !1, !0));
	}
	return i.dirs && ((S = lu(S, null, !1, !0)).dirs = S.dirs ? S.dirs.concat(i.dirs) : i.dirs), i.transition && nW(S.type.__isTeleport && nq(S) || S, i.transition), t = S, ni(_), t;
}
function iS(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let l = r[i];
		if (ix(t, e, l) && !iy(n, l)) return !0;
	}
	return !1;
}
function ix(e, t, n) {
	let r = e[n], i = t[n];
	return "style" === n && E(r) && E(i) ? !eo(r, i) : r !== i;
}
function iC({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
function iw(e, t, n, r) {
	let i, [l, s] = e.propsOptions, o = !1;
	if (t) for (let a in t) {
		let c;
		if (P(a)) continue;
		let u = t[a];
		l && k(l, c = L(a)) ? s && s.includes(c) ? (i || (i = {}))[c] = u : n[c] = u : iy(e.emitsOptions, a) || a in r && u === r[a] || (r[a] = u, o = !0);
	}
	if (s) {
		let t = t_(n), r = i || f;
		for (let i = 0; i < s.length; i++) {
			let o = s[i];
			n[o] = iN(l, t, o, r[o], e, !k(r, o));
		}
	}
	return o;
}
function iN(e, t, n, r, i, l) {
	let s = e[n];
	if (null != s) {
		let e = k(s, "default");
		if (e && void 0 === r) {
			let e = s.default;
			if (s.type !== Function && !s.skipFactory && w(e)) {
				let { propsDefaults: l } = i;
				if (n in l) r = l[n];
				else {
					let s = lk(i);
					r = l[n] = e.call(null, t), s();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		s[0] && (l && !e ? r = !1 : s[1] && ("" === r || r === V(n)) && (r = !0));
	}
	return r;
}
function iE(e) {
	return !("$" === e[0] || P(e));
}
function iL(e) {
	return iV(e);
}
function i$(e) {
	return iV(e, n4);
}
function iV(e, t) {
	var n;
	let r, i;
	z().__VUE__ = !0;
	let { insert: l, remove: s, patchProp: o, createElement: a, createText: c, createComment: u, setText: d, setElementText: p, parentNode: h, nextSibling: y, setScopeId: _ = m, insertStaticContent: b } = e, x = (e, t, n, r = null, i = null, l = null, s, o = null, a = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !lr(e, t) && (r = en(e), Q(e, i, l, !0), e = null), -2 === t.patchFlag && (a = !1, t.dynamicChildren = null);
		let { type: c, ref: u, shapeFlag: d } = t;
		switch (c) {
			case i0:
				C(e, t, n, r);
				break;
			case i1:
				T(e, t, n, r);
				break;
			case i2:
				e ?? N(t, n, r, s);
				break;
			case iY:
				$(e, t, n, r, i, l, s, o, a);
				break;
			default: 1 & d ? A(e, t, n, r, i, l, s, o, a) : 6 & d ? B(e, t, n, r, i, l, s, o, a) : 64 & d ? c.process(e, t, n, r, i, l, s, o, a, el) : 128 & d && c.process(e, t, n, r, i, l, s, o, a, el);
		}
		null != u && i ? nY(u, e && e.ref, l, t || e, !t) : null == u && e && null != e.ref && nY(e.ref, null, l, e, !0);
	}, C = (e, t, n, r) => {
		if (null == e) l(t.el = c(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && d(n, t.children);
		}
	}, T = (e, t, n, r) => {
		null == e ? l(t.el = u(t.children || ""), n, r) : t.el = e.el;
	}, N = (e, t, n, r) => {
		[e.el, e.anchor] = b(e.children, t, n, r, e.el, e.anchor);
	}, A = (e, t, n, r, i, l, s, o, a) => {
		if ("svg" === t.type ? s = "svg" : "math" === t.type && (s = "mathml"), null == e) R(t, n, r, i, l, s, o, a);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), M(e, t, i, l, s, o, a);
			} finally {
				n && n._endPatch();
			}
		}
	}, R = (e, t, n, r, i, s, c, u) => {
		let d, h, { props: f, shapeFlag: g, transition: m, dirs: y } = e;
		if (d = e.el = a(e.type, s, f && f.is, f), 8 & g ? p(d, e.children) : 16 & g && O(e.children, d, null, r, i, iB(e, s), c, u), y && nu(e, null, r, "created"), I(d, e, e.scopeId, c, r), f) {
			for (let e in f) "value" === e || P(e) || o(d, e, null, f[e], s, r);
			"value" in f && o(d, "value", null, f.value, s), (h = f.onVnodeBeforeMount) && lv(h, r, e);
		}
		y && nu(e, null, r, "beforeMount");
		let _ = iU(i, m);
		_ && m.beforeEnter(d), l(d, t, n), ((h = f && f.onVnodeMounted) || _ || y) && iD(() => {
			h && lv(h, r, e), _ && m.enter(d), y && nu(e, null, r, "mounted");
		}, i);
	}, I = (e, t, n, r, i) => {
		if (n && _(e, n), r) for (let t = 0; t < r.length; t++) _(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || iW(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				I(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, O = (e, t, n, r, i, l, s, o, a = 0) => {
		for (let c = a; c < e.length; c++) x(null, e[c] = o ? lg(e[c]) : lf(e[c]), t, n, r, i, l, s, o);
	}, M = (e, t, n, r, i, l, s) => {
		let a, c = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: h } = t;
		u |= 16 & e.patchFlag;
		let g = e.props || f, m = t.props || f;
		if (n && ij(n, !1), (a = m.onVnodeBeforeUpdate) && lv(a, n, t, e), h && nu(t, e, n, "beforeUpdate"), n && ij(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (g.innerHTML && null == m.innerHTML || g.textContent && null == m.textContent) && p(c, ""), d ? F(e.dynamicChildren, d, c, n, r, iB(t, i), l) : s || K(e, t, c, null, n, r, iB(t, i), l, !1), u > 0) {
			if (16 & u) D(c, g, m, n, i);
			else if (2 & u && g.class !== m.class && o(c, "class", null, m.class, i), 4 & u && o(c, "style", g.style, m.style, i), 8 & u) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], l = g[r], s = m[r];
					(s !== l || "value" === r) && o(c, r, l, s, i, n);
				}
			}
			1 & u && e.children !== t.children && p(c, t.children);
		} else s || null != d || D(c, g, m, n, i);
		((a = m.onVnodeUpdated) || h) && iD(() => {
			a && lv(a, n, t, e), h && nu(t, e, n, "updated");
		}, r);
	}, F = (e, t, n, r, i, l, s) => {
		for (let o = 0; o < t.length; o++) {
			let a = e[o], c = t[o], u = a.el && (a.type === iY || !lr(a, c) || 198 & a.shapeFlag) ? h(a.el) : n;
			x(a, c, u, null, r, i, l, s, !0);
		}
	}, D = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== f) for (let l in t) P(l) || l in n || o(e, l, t[l], null, i, r);
			for (let l in n) {
				if (P(l)) continue;
				let s = n[l], a = t[l];
				s !== a && "value" !== l && o(e, l, a, s, i, r);
			}
			"value" in n && o(e, "value", t.value, n.value, i);
		}
	}, $ = (e, t, n, r, i, s, o, a, u) => {
		let d = t.el = e ? e.el : c(""), p = t.anchor = e ? e.anchor : c(""), { patchFlag: h, dynamicChildren: f, slotScopeIds: g } = t;
		g && (a = a ? a.concat(g) : g), null == e ? (l(d, n, r), l(p, n, r), O(t.children || [], n, p, i, s, o, a, u)) : h > 0 && 64 & h && f && e.dynamicChildren && e.dynamicChildren.length === f.length ? (F(e.dynamicChildren, f, n, i, s, o, a), (null != t.key || i && t === i.subTree) && iH(e, t, !0)) : K(e, t, n, p, i, s, o, a, u);
	}, B = (e, t, n, r, i, l, s, o, a) => {
		t.slotScopeIds = o, null == e ? 512 & t.shapeFlag ? i.ctx.activate(t, n, r, s, a) : j(t, n, r, i, l, s, a) : U(e, t, a);
	}, j = (e, t, n, r, i, l, s) => {
		let o = e.component = lS(e, r, i);
		if (ru(e) && (o.ctx.renderer = el), lA(o, !1, s), o.asyncDep) {
			if (i && i.registerDep(o, q, s), !e.el) {
				let r = o.subTree = la(i1);
				T(null, r, t, n), e.placeholder = r.el;
			}
		} else q(o, e, t, n, i, l, s);
	}, U = (e, t, n) => {
		let r = t.component = e.component;
		if (function(e, t, n) {
			let { props: r, children: i, component: l } = e, { props: s, children: o, patchFlag: a } = t, c = l.emitsOptions;
			if (t.dirs || t.transition) return !0;
			if (!n || !(a >= 0)) return (!!i || !!o) && (!o || !o.$stable) || r !== s && (r ? !s || iS(r, s, c) : !!s);
			if (1024 & a) return !0;
			if (16 & a) return r ? iS(r, s, c) : !!s;
			if (8 & a) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t];
					if (ix(s, r, n) && !iy(c, n)) return !0;
				}
			}
			return !1;
		}(e, t, n)) if (r.asyncDep && !r.asyncResolved) return void W(r, t, n);
		else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, q = (e, t, n, r, l, s, o) => {
		e.scope.on();
		let a = e.effect = new ev(() => {
			if (e.isMounted) {
				let t, { next: n, bu: r, u: i, parent: a, vnode: u } = e;
				{
					let t = function e(t) {
						let n = t.subTree.component;
						if (n) if (n.asyncDep && !n.asyncResolved) return n;
						else return e(n);
					}(e);
					if (t) {
						n && (n.el = u.el, W(e, n, o)), t.asyncDep.then(() => {
							iD(() => {
								e.isUnmounted || c();
							}, l);
						});
						return;
					}
				}
				let d = n;
				ij(e, !1), n ? (n.el = u.el, W(e, n, o)) : n = u, r && H(r), (t = n.props && n.props.onVnodeBeforeUpdate) && lv(t, a, n, u), ij(e, !0);
				let p = iv(e), f = e.subTree;
				e.subTree = p, x(f, p, h(f.el), en(f), e, l, s), n.el = p.el, null === d && iC(e, p.el), i && iD(i, l), (t = n.props && n.props.onVnodeUpdated) && iD(() => lv(t, a, n, u), l);
			} else {
				let o, { el: a, props: c } = t, { bm: u, m: d, parent: p, root: h, type: f } = e, g = ro(t);
				if (ij(e, !1), u && H(u), !g && (o = c && c.onVnodeBeforeMount) && lv(o, p, t), ij(e, !0), a && i) {
					let t = () => {
						e.subTree = iv(e), i(a, e.subTree, e, l, null);
					};
					g && f.__asyncHydrate ? f.__asyncHydrate(a, e, t) : t();
				} else {
					h.ce && h.ce._hasShadowRoot() && h.ce._injectChildStyle(f, e.parent ? e.parent.type : void 0);
					let i = e.subTree = iv(e);
					x(null, i, n, r, e, l, s), t.el = i.el;
				}
				if (d && iD(d, l), !g && (o = c && c.onVnodeMounted)) {
					let e = t;
					iD(() => lv(o, p, e), l);
				}
				(256 & t.shapeFlag || p && ro(p.vnode) && 256 & p.vnode.shapeFlag) && e.a && iD(e.a, l), e.isMounted = !0, t = n = r = null;
			}
		});
		e.scope.off();
		let c = e.update = a.run.bind(a), u = e.job = a.runIfDirty.bind(a);
		u.i = e, u.id = e.uid, a.scheduler = () => t8(u), ij(e, !0), c();
	}, W = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, function(e, t, n, r) {
			let { props: i, attrs: l, vnode: { patchFlag: s } } = e, o = t_(i), [a] = e.propsOptions, c = !1;
			if ((r || s > 0) && !(16 & s)) {
				if (8 & s) {
					let n = e.vnode.dynamicProps;
					for (let r = 0; r < n.length; r++) {
						let s = n[r];
						if (iy(e.emitsOptions, s)) continue;
						let u = t[s];
						if (a) if (k(l, s)) u !== l[s] && (l[s] = u, c = !0);
						else {
							let t = L(s);
							i[t] = iN(a, o, t, u, e, !1);
						}
						else u !== l[s] && (l[s] = u, c = !0);
					}
				}
			} else {
				let r;
				for (let s in iw(e, t, i, l) && (c = !0), o) t && (k(t, s) || (r = V(s)) !== s && k(t, r)) || (a ? n && (void 0 !== n[s] || void 0 !== n[r]) && (i[s] = iN(a, o, s, void 0, e, !0)) : delete i[s]);
				if (l !== o) for (let e in l) t && k(t, e) || (delete l[e], c = !0);
			}
			c && eU(e.attrs, "set", "");
		}(e, t.props, r, n), ((e, t, n) => {
			let { vnode: r, slots: i } = e, l = !0, s = f;
			if (32 & r.shapeFlag) {
				let e = t._;
				e ? n && 1 === e ? l = !1 : iF(i, t, n) : (l = !t.$stable, iP(t, i)), s = t;
			} else t && (iM(e, t), s = { default: 1 });
			if (l) for (let e in i) iR(e) || null != s[e] || delete i[e];
		})(e, t.children, n), eI(), t7(e), eO();
	}, K = (e, t, n, r, i, l, s, o, a = !1) => {
		let c = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: h, shapeFlag: f } = t;
		if (h > 0) {
			if (128 & h) return void G(c, d, n, r, i, l, s, o, a);
			else if (256 & h) return void J(c, d, n, r, i, l, s, o, a);
		}
		8 & f ? (16 & u && et(c, i, l), d !== c && p(n, d)) : 16 & u ? 16 & f ? G(c, d, n, r, i, l, s, o, a) : et(c, i, l, !0) : (8 & u && p(n, ""), 16 & f && O(d, n, r, i, l, s, o, a));
	}, J = (e, t, n, r, i, l, s, o, a) => {
		let c;
		e = e || g, t = t || g;
		let u = e.length, d = t.length, p = Math.min(u, d);
		for (c = 0; c < p; c++) {
			let r = t[c] = a ? lg(t[c]) : lf(t[c]);
			x(e[c], r, n, null, i, l, s, o, a);
		}
		u > d ? et(e, i, l, !0, !1, p) : O(t, n, r, i, l, s, o, a, p);
	}, G = (e, t, n, r, i, l, s, o, a) => {
		let c = 0, u = t.length, d = e.length - 1, p = u - 1;
		for (; c <= d && c <= p;) {
			let r = e[c], u = t[c] = a ? lg(t[c]) : lf(t[c]);
			if (lr(r, u)) x(r, u, n, null, i, l, s, o, a);
			else break;
			c++;
		}
		for (; c <= d && c <= p;) {
			let r = e[d], c = t[p] = a ? lg(t[p]) : lf(t[p]);
			if (lr(r, c)) x(r, c, n, null, i, l, s, o, a);
			else break;
			d--, p--;
		}
		if (c > d) {
			if (c <= p) {
				let e = p + 1, d = e < u ? t[e].el : r;
				for (; c <= p;) x(null, t[c] = a ? lg(t[c]) : lf(t[c]), n, d, i, l, s, o, a), c++;
			}
		} else if (c > p) for (; c <= d;) Q(e[c], i, l, !0), c++;
		else {
			let h, f = c, m = c, y = /* @__PURE__ */ new Map();
			for (c = m; c <= p; c++) {
				let e = t[c] = a ? lg(t[c]) : lf(t[c]);
				null != e.key && y.set(e.key, c);
			}
			let _ = 0, b = p - m + 1, S = !1, C = 0, k = Array(b);
			for (c = 0; c < b; c++) k[c] = 0;
			for (c = f; c <= d; c++) {
				let r, u = e[c];
				if (_ >= b) {
					Q(u, i, l, !0);
					continue;
				}
				if (null != u.key) r = y.get(u.key);
				else for (h = m; h <= p; h++) if (0 === k[h - m] && lr(u, t[h])) {
					r = h;
					break;
				}
				void 0 === r ? Q(u, i, l, !0) : (k[r - m] = c + 1, r >= C ? C = r : S = !0, x(u, t[r], n, null, i, l, s, o, a), _++);
			}
			let T = S ? function(e) {
				let t, n, r, i, l, s = e.slice(), o = [0], a = e.length;
				for (t = 0; t < a; t++) {
					let a = e[t];
					if (0 !== a) {
						if (e[n = o[o.length - 1]] < a) {
							s[t] = n, o.push(t);
							continue;
						}
						for (r = 0, i = o.length - 1; r < i;) e[o[l = r + i >> 1]] < a ? r = l + 1 : i = l;
						a < e[o[r]] && (r > 0 && (s[t] = o[r - 1]), o[r] = t);
					}
				}
				for (r = o.length, i = o[r - 1]; r-- > 0;) o[r] = i, i = s[i];
				return o;
			}(k) : g;
			for (h = T.length - 1, c = b - 1; c >= 0; c--) {
				let e = m + c, d = t[e], p = t[e + 1], f = e + 1 < u ? p.el || function e(t) {
					if (t.placeholder) return t.placeholder;
					let n = t.component;
					return n ? e(n.subTree) : null;
				}(p) : r;
				0 === k[c] ? x(null, d, n, f, i, l, s, o, a) : S && (h < 0 || c !== T[h] ? X(d, n, f, 2) : h--);
			}
		}
	}, X = (e, t, n, r, i = null) => {
		let { el: o, type: a, transition: c, children: u, shapeFlag: d } = e;
		if (6 & d) return void X(e.component.subTree, t, n, r);
		if (128 & d) return void e.suspense.move(t, n, r);
		if (64 & d) return void a.move(e, t, n, el);
		if (a === iY) {
			l(o, t, n);
			for (let e = 0; e < u.length; e++) X(u[e], t, n, r);
			l(e.anchor, t, n);
			return;
		}
		if (a === i2) return void (({ el: e, anchor: t }, n, r) => {
			let i;
			for (; e && e !== t;) i = y(e), l(e, n, r), e = i;
			l(t, n, r);
		})(e, t, n);
		if (2 !== r && 1 & d && c) if (0 === r) c.persisted && !o[nP] ? l(o, t, n) : (c.beforeEnter(o), l(o, t, n), iD(() => c.enter(o), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: a } = c, u = () => {
				e.ctx.isUnmounted ? s(o) : l(o, t, n);
			}, d = () => {
				let e = o._isLeaving || !!o[nP];
				o._isLeaving && o[nP](!0), c.persisted && !e ? u() : r(o, () => {
					u(), a && a();
				});
			};
			i ? i(o, u, d) : d();
		}
		else l(o, t, n);
	}, Q = (e, t, n, r = !1, i = !1) => {
		let l, { type: s, props: o, ref: a, children: c, dynamicChildren: u, shapeFlag: d, patchFlag: p, dirs: h, cacheIndex: f, memo: g } = e;
		if (-2 === p && (i = !1), null != a && (eI(), nY(a, null, n, e, !0), eO()), null != f && (t.renderCache[f] = void 0), 256 & d) return void t.ctx.deactivate(e);
		let m = 1 & d && h, y = !ro(e);
		if (y && (l = o && o.onVnodeBeforeUnmount) && lv(l, t, e), 6 & d) ee(e.component, n, r);
		else {
			if (128 & d) return void e.suspense.unmount(n, r);
			m && nu(e, null, t, "beforeUnmount"), 64 & d ? e.type.remove(e, t, n, el, r) : u && !u.hasOnce && (s !== iY || p > 0 && 64 & p) ? et(u, t, n, !1, !0) : (s === iY && 384 & p || !i && 16 & d) && et(c, t, n), r && Z(e);
		}
		let _ = null != g && null == f;
		(y && (l = o && o.onVnodeUnmounted) || m || _) && iD(() => {
			l && lv(l, t, e), m && nu(e, null, t, "unmounted"), _ && (e.el = null);
		}, n);
	}, Z = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === iY) return void Y(n, r);
		if (t === i2) return void (({ el: e, anchor: t }) => {
			let n;
			for (; e && e !== t;) n = y(e), s(e), e = n;
			s(t);
		})(e);
		let l = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (1 & e.shapeFlag && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, s = () => t(n, l);
			r ? r(e.el, l, s) : s();
		} else l();
	}, Y = (e, t) => {
		let n;
		for (; e !== t;) n = y(e), s(e), e = n;
		s(t);
	}, ee = (e, t, n) => {
		let { bum: r, scope: i, job: l, subTree: s, um: o, m: a, a: c } = e;
		iq(a), iq(c), r && H(r), i.stop(), l && (l.flags |= 8, Q(s, e, t, n)), o && iD(o, t), iD(() => {
			e.isUnmounted = !0;
		}, t);
	}, et = (e, t, n, r = !1, i = !1, l = 0) => {
		for (let s = l; s < e.length; s++) Q(e[s], t, n, r, i);
	}, en = (e) => {
		if (6 & e.shapeFlag) return en(e.component.subTree);
		if (128 & e.shapeFlag) return e.suspense.next();
		let t = y(e.anchor || e.el), n = t && t[nk];
		return n ? y(n) : t;
	}, er = !1, ei = (e, t, n) => {
		let r;
		null == e ? t._vnode && (Q(t._vnode, null, null, !0), r = t._vnode.component) : x(t._vnode || null, e, t, null, null, null, n), t._vnode = e, er || (er = !0, t7(r), ne(), er = !1);
	}, el = {
		p: x,
		um: Q,
		m: X,
		r: Z,
		mt: j,
		mc: O,
		pc: K,
		pbc: F,
		n: en,
		o: e
	};
	return t && ([r, i] = t(el)), {
		render: ei,
		hydrate: r,
		createApp: (n = r, function(e, t = null) {
			w(e) || (e = S({}, e)), null == t || E(t) || (t = null);
			let r = ic(), i = /* @__PURE__ */ new WeakSet(), l = [], s = !1, o = r.app = {
				_uid: iu++,
				_component: e,
				_props: t,
				_container: null,
				_context: r,
				_instance: null,
				version: lU,
				get config() {
					return r.config;
				},
				set config(v) {},
				use: (e, ...t) => (i.has(e) || (e && w(e.install) ? (i.add(e), e.install(o, ...t)) : w(e) && (i.add(e), e(o, ...t))), o),
				mixin: (e) => (r.mixins.includes(e) || r.mixins.push(e), o),
				component: (e, t) => t ? (r.components[e] = t, o) : r.components[e],
				directive: (e, t) => t ? (r.directives[e] = t, o) : r.directives[e],
				mount(i, l, a) {
					if (!s) {
						let c = o._ceVNode || la(e, t);
						return c.appContext = r, !0 === a ? a = "svg" : !1 === a && (a = void 0), l && n ? n(c, i) : ei(c, i, a), s = !0, o._container = i, i.__vue_app__ = o, lF(c.component);
					}
				},
				onUnmount(e) {
					l.push(e);
				},
				unmount() {
					s && (tX(l, o._instance, 16), ei(null, o._container), delete o._container.__vue_app__);
				},
				provide: (e, t) => (r.provides[e] = t, o),
				runWithContext(e) {
					let t = id;
					id = o;
					try {
						return e();
					} finally {
						id = t;
					}
				}
			};
			return o;
		})
	};
}
function iB({ type: e, props: t }, n) {
	return "svg" === n && "foreignObject" === e || "mathml" === n && "annotation-xml" === e && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ij({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function iU(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function iH(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (T(r) && T(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], l = i[e];
		1 & l.shapeFlag && !l.dynamicChildren && ((l.patchFlag <= 0 || 32 === l.patchFlag) && ((l = i[e] = lg(i[e])).el = t.el), n || -2 === l.patchFlag || iH(t, l)), l.type === i0 && (-1 === l.patchFlag && (l = i[e] = lg(l)), l.el = t.el), l.type !== i1 || l.el || (l.el = t.el);
	}
}
function iq(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function iJ(e, t) {
	let n = e.props && e.props[t];
	w(n) && n();
}
function iG(e, t, n, r, i, l, s, o, a, c, u = !1) {
	var d;
	let p, h, { p: f, m: g, um: m, n: y, o: { parentNode: _, remove: b } } = c, S = null != (p = (d = e).props && d.props.suspensible) && !1 !== p;
	S && t && t.pendingBranch && (h = t.pendingId, t.deps++);
	let x = e.props ? K(e.props.timeout) : void 0, C = l, k = {
		vnode: e,
		parent: t,
		parentComponent: n,
		namespace: s,
		container: r,
		hiddenContainer: i,
		deps: 0,
		pendingId: iK++,
		timeout: "number" == typeof x ? x : -1,
		activeBranch: null,
		isFallbackMountPending: !1,
		pendingBranch: null,
		isInFallback: !u,
		isHydrating: u,
		isUnmounted: !1,
		effects: [],
		resolve(e = !1, n = !1) {
			let { vnode: r, activeBranch: i, pendingBranch: s, pendingId: o, effects: a, parentComponent: c, container: u, isInFallback: d } = k, p = !1;
			if (k.isHydrating) k.isHydrating = !1;
			else if (!e) {
				p = i && s.transition && "out-in" === s.transition.mode;
				let e = !1;
				p && (i.transition.afterLeave = () => {
					o === k.pendingId && (g(s, u, l !== C || e ? l : y(i), 0), t9(a), d && r.ssFallback && (r.ssFallback.el = null));
				}), i && !k.isFallbackMountPending && (_(i.el) === u && (l = y(i), e = !0), m(i, c, k, !0), !p && d && r.ssFallback && iD(() => r.ssFallback.el = null, k)), p || g(s, u, l, 0);
			}
			k.isFallbackMountPending = !1, iZ(k, s), k.pendingBranch = null, k.isInFallback = !1;
			let f = k.parent, b = !1;
			for (; f;) {
				if (f.pendingBranch) {
					for (let e = 0; e < a.length; e++) f.effects.push(a[e]);
					b = !0;
					break;
				}
				f = f.parent;
			}
			b || p || t9(a), k.effects = [], S && t && t.pendingBranch && h === t.pendingId && (t.deps--, 0 !== t.deps || n || t.resolve()), iJ(r, "onResolve");
		},
		fallback(e) {
			if (!k.pendingBranch) return;
			let { vnode: t, activeBranch: n, parentComponent: r, container: i, namespace: l } = k;
			iJ(t, "onFallback");
			let s = y(n), c = () => {
				k.isFallbackMountPending = !1, k.isInFallback && (f(null, e, i, s, r, null, l, o, a), iZ(k, e));
			}, u = e.transition && "out-in" === e.transition.mode;
			u && (k.isFallbackMountPending = !0, n.transition.afterLeave = c), k.isInFallback = !0, m(n, r, null, !0), u || c();
		},
		move(e, t, n) {
			k.activeBranch && g(k.activeBranch, e, t, n), k.container = e;
		},
		next: () => k.activeBranch && y(k.activeBranch),
		registerDep(e, t, n) {
			let r = !!k.pendingBranch;
			r && k.deps++;
			let i = e.vnode.el;
			e.asyncDep.catch((t) => {
				tQ(t, e, 0);
			}).then((l) => {
				if (e.isUnmounted || k.isUnmounted || k.pendingId !== e.suspenseId) return;
				lT(), e.asyncResolved = !0;
				let { vnode: o } = e;
				lE(e, l, !1), i && (o.el = i);
				let a = !i && e.subTree.el;
				t(e, o, _(i || e.subTree.el), i ? null : y(e.subTree), k, s, n), a && (o.placeholder = null, b(a)), iC(e, o.el), r && 0 == --k.deps && k.resolve();
			});
		},
		unmount(e, t) {
			k.isUnmounted = !0, k.activeBranch && m(k.activeBranch, n, e, t), k.pendingBranch && m(k.pendingBranch, n, e, t);
		}
	};
	return k;
}
function iX(e) {
	let t;
	if (w(e)) {
		let n = i5 && e._c;
		n && (e._d = !1, i4()), e = e(), n && (e._d = !0, t = i6, i8());
	}
	return T(e) && (e = function(e) {
		let t;
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (!ln(r)) return;
			if (r.type !== i1 || "v-if" === r.children) if (t) return;
			else t = r;
		}
		return t;
	}(e)), e = lf(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((t) => t !== e)), e;
}
function iQ(e, t) {
	t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : t9(e);
}
function iZ(e, t) {
	e.activeBranch = t;
	let { vnode: n, parentComponent: r } = e, i = t.el;
	for (; !i && t.component;) i = (t = t.component.subTree).el;
	n.el = i, r && r.subTree === n && (r.vnode.el = i, iC(r, i));
}
function i4(e = !1) {
	i3.push(i6 = e ? null : []);
}
function i8() {
	i3.pop(), i6 = i3[i3.length - 1] || null;
}
function i9(e, t = !1) {
	i5 += e, e < 0 && i6 && t && (i6.hasOnce = !0);
}
function i7(e) {
	return e.dynamicChildren = i5 > 0 ? i6 || g : null, i8(), i5 > 0 && i6 && i6.push(e), e;
}
function le(e, t, n, r, i, l) {
	return i7(lo(e, t, n, r, i, l, !0));
}
function lt(e, t, n, r, i) {
	return i7(la(e, t, n, r, i, !0));
}
function ln(e) {
	return !!e && !0 === e.__v_isVNode;
}
function lr(e, t) {
	return e.type === t.type && e.key === t.key;
}
function li(e) {}
function lo(e, t = null, n = null, r = 0, i = null, l = +(e !== iY), s = !1, o = !1) {
	let a = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ll(t),
		ref: t && ls(t),
		scopeId: nr,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: l,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: nn
	};
	return o ? (lm(a, n), 128 & l && e.normalize(a)) : n && (a.shapeFlag |= N(n) ? 8 : 16), i5 > 0 && !s && i6 && (a.patchFlag > 0 || 6 & l) && 32 !== a.patchFlag && i6.push(a), a;
}
function lc(e) {
	return e ? tv(e) || iT(e) ? S({}, e) : e : null;
}
function lu(e, t, n = !1, r = !1) {
	let { props: i, ref: l, patchFlag: s, children: o, transition: a } = e, c = t ? ly(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: c,
		key: c && ll(c),
		ref: t && t.ref ? n && l ? T(l) ? l.concat(ls(t)) : [l, ls(t)] : ls(t) : l,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: o,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== iY ? -1 === s ? 16 : 16 | s : s,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: a,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && lu(e.ssContent),
		ssFallback: e.ssFallback && lu(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return a && r && nW(u, a.clone(u)), u;
}
function ld(e = " ", t = 0) {
	return la(i0, null, e, t);
}
function lp(e, t) {
	let n = la(i2, null, e);
	return n.staticCount = t, n;
}
function lh(e = "", t = !1) {
	return t ? (i4(), lt(i1, null, e)) : la(i1, null, e);
}
function lf(e) {
	return null == e || "boolean" == typeof e ? la(i1) : T(e) ? la(iY, null, e.slice()) : ln(e) ? lg(e) : la(i0, null, String(e));
}
function lg(e) {
	return null === e.el && -1 !== e.patchFlag || e.memo ? e : lu(e);
}
function lm(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (null == t) t = null;
	else if (T(t)) n = 16;
	else if ("object" == typeof t) if (65 & r) {
		let n = t.default;
		n && (n._c && (n._d = !1), lm(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		r || iT(t) ? 3 === r && nn && (1 === nn.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = nn;
	}
	else if (w(t)) {
		if (65 & r) return void lm(e, { default: t });
		t = {
			default: t,
			_ctx: nn
		}, n = 32;
	} else t = String(t), 64 & r ? (n = 16, t = [ld(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ly(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if ("class" === e) t.class !== r.class && (t.class = ee([t.class, r.class]));
		else if ("style" === e) t.style = G([t.style, r.style]);
		else if (_(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(T(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : null != i || null != n || b(e) || (t[e] = i);
		} else "" !== e && (t[e] = r[e]);
	}
	return t;
}
function lv(e, t, n, r = null) {
	tX(e, t, 7, [n, r]);
}
function lS(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || l_, l = {
		uid: lb++,
		vnode: e,
		type: r,
		parent: t,
		appContext: i,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new eh(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(i.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: function e(t, n, r = !1) {
			let i = r ? iA : n.propsCache, l = i.get(t);
			if (l) return l;
			let s = t.props, o = {}, a = [], c = !1;
			if (!w(t)) {
				let i = (t) => {
					c = !0;
					let [r, i] = e(t, n, !0);
					S(o, r), i && a.push(...i);
				};
				!r && n.mixins.length && n.mixins.forEach(i), t.extends && i(t.extends), t.mixins && t.mixins.forEach(i);
			}
			if (!s && !c) return E(t) && i.set(t, g), g;
			if (T(s)) for (let e = 0; e < s.length; e++) {
				let t = L(s[e]);
				iE(t) && (o[t] = f);
			}
			else if (s) for (let e in s) {
				let t = L(e);
				if (iE(t)) {
					let n = s[e], r = o[t] = T(n) || w(n) ? { type: n } : S({}, n), i = r.type, l = !1, c = !0;
					if (T(i)) for (let e = 0; e < i.length; ++e) {
						let t = i[e], n = w(t) && t.name;
						if ("Boolean" === n) {
							l = !0;
							break;
						}
						"String" === n && (c = !1);
					}
					else l = w(i) && "Boolean" === i.name;
					r[0] = l, r[1] = c, (l || k(r, "default")) && a.push(t);
				}
			}
			let u = [o, a];
			return E(t) && i.set(t, u), u;
		}(r, i),
		emitsOptions: function e(t, n, r = !1) {
			let i = r ? im : n.emitsCache, l = i.get(t);
			if (void 0 !== l) return l;
			let s = t.emits, o = {}, a = !1;
			if (!w(t)) {
				let i = (t) => {
					let r = e(t, n, !0);
					r && (a = !0, S(o, r));
				};
				!r && n.mixins.length && n.mixins.forEach(i), t.extends && i(t.extends), t.mixins && t.mixins.forEach(i);
			}
			return s || a ? (T(s) ? s.forEach((e) => o[e] = null) : S(o, s), E(t) && i.set(t, o), o) : (E(t) && i.set(t, null), null);
		}(r, i),
		emit: null,
		emitted: null,
		propsDefaults: f,
		inheritAttrs: r.inheritAttrs,
		ctx: f,
		data: f,
		props: f,
		attrs: f,
		slots: f,
		refs: f,
		setupState: f,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = ig.bind(null, l), e.ce && e.ce(l), l;
}
function lw(e) {
	return 4 & e.vnode.shapeFlag;
}
function lA(e, t = !1, n = !1) {
	t && s(t);
	let { props: r, children: i } = e.vnode, l = lw(e);
	(function(e, t, n, r = !1) {
		let i = {}, l = Object.create(ik);
		for (let n in e.propsDefaults = Object.create(null), iw(e, t, i, l), e.propsOptions[0]) n in i || (i[n] = void 0);
		n ? e.props = r ? i : td(i) : e.type.props ? e.props = i : e.props = l, e.attrs = l;
	})(e, r, l, t);
	var o = n || t;
	let a = e.slots = Object.create(ik);
	if (32 & e.vnode.shapeFlag) {
		let e = i._;
		e ? (iF(a, i, o), o && q(a, "_", e, !0)) : iP(i, a);
	} else i && iM(e, i);
	let c = l ? function(e, t) {
		let n = e.type;
		e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, rW);
		let { setup: r } = n;
		if (r) {
			eI();
			let n = e.setupContext = r.length > 1 ? lM(e) : null, i = lk(e), l = tG(r, e, 0, [e.props, n]), o = R(l);
			if (eO(), i(), (o || e.sp) && !ro(e) && nG(e), o) {
				if (l.then(lT, lT), t) return l.then((n) => {
					s(!0);
					try {
						lE(e, n, t);
					} finally {
						s(!1);
					}
				}).catch((t) => {
					tQ(t, e, 0);
				});
				e.asyncDep = l;
			} else lE(e, l, t);
		} else lO(e, t);
	}(e, t) : void 0;
	return t && s(!1), c;
}
function lE(e, t, n) {
	w(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : E(t) && (e.setupState = tO(t)), lO(e, n);
}
function lR(e) {
	o = e, a = (e) => {
		e.render._rc && (e.withProxy = new Proxy(e.ctx, rK));
	};
}
function lO(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && o && !r.render) {
			let t = r.template || ie(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: s } = r, a = S(S({
					isCustomElement: n,
					delimiters: l
				}, i), s);
				r.render = o(t, a);
			}
		}
		e.render = r.render || m, a && a(e);
	}
	{
		let t = lk(e);
		eI();
		try {
			(function(e) {
				let t = ie(e), n = e.proxy, r = e.ctx;
				r9 = !1, t.beforeCreate && r7(t.beforeCreate, e, "bc");
				let { data: i, computed: l, methods: s, watch: o, provide: a, inject: c, created: u, beforeMount: d, mounted: p, beforeUpdate: h, updated: f, activated: g, deactivated: y, beforeUnmount: _, unmounted: b, render: S, renderTracked: x, renderTriggered: C, errorCaptured: k, serverPrefetch: A, expose: R, inheritAttrs: I, components: O, directives: P } = t;
				if (c && function(e, t) {
					for (let n in T(e) && (e = il(e)), e) {
						let r, i = e[n];
						tC(r = E(i) ? "default" in i ? np(i.from || n, i.default, !0) : np(i.from || n) : np(i)) ? Object.defineProperty(t, n, {
							enumerable: !0,
							configurable: !0,
							get: () => r.value,
							set: (e) => r.value = e
						}) : t[n] = r;
					}
				}(c, r), s) for (let e in s) {
					let t = s[e];
					w(t) && (r[e] = t.bind(n));
				}
				if (i) {
					let t = i.call(n, n);
					E(t) && (e.data = tu(t));
				}
				if (r9 = !0, l) for (let e in l) {
					let t = l[e], i = w(t) ? t.bind(n, n) : w(t.get) ? t.get.bind(n, n) : m, s = lL({
						get: i,
						set: !w(t) && w(t.set) ? t.set.bind(n) : m
					});
					Object.defineProperty(r, e, {
						enumerable: !0,
						configurable: !0,
						get: () => s.value,
						set: (e) => s.value = e
					});
				}
				if (o) for (let e in o) (function e(t, n, r, i) {
					let l = i.includes(".") ? nx(r, i) : () => r[i];
					if (N(t)) {
						let e = n[t];
						w(e) && n_(l, e);
					} else if (w(t)) n_(l, t.bind(r));
					else if (E(t)) if (T(t)) t.forEach((t) => e(t, n, r, i));
					else {
						let e = w(t.handler) ? t.handler.bind(r) : n[t.handler];
						w(e) && n_(l, e, t);
					}
				})(o[e], r, n, e);
				if (a) {
					let e = w(a) ? a.call(n) : a;
					Reflect.ownKeys(e).forEach((t) => {
						nd(t, e[t]);
					});
				}
				function M(e, t) {
					T(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
				}
				if (u && r7(u, e, "c"), M(rb, d), M(rS, p), M(rx, h), M(rC, f), M(rh, g), M(rf, y), M(rE, k), M(rA, x), M(rN, C), M(rk, _), M(rT, b), M(rw, A), T(R)) if (R.length) {
					let t = e.exposed || (e.exposed = {});
					R.forEach((e) => {
						Object.defineProperty(t, e, {
							get: () => n[e],
							set: (t) => n[e] = t,
							enumerable: !0
						});
					});
				} else e.exposed || (e.exposed = {});
				S && e.render === m && (e.render = S), null != I && (e.inheritAttrs = I), O && (e.components = O), P && (e.directives = P), A && nG(e);
			})(e);
		} finally {
			eO(), t();
		}
	}
}
function lM(e) {
	return {
		attrs: new Proxy(e.attrs, lP),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function lF(e) {
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(tO(tb(e.exposed)), {
		get: (t, n) => n in t ? t[n] : n in rH ? rH[n](e) : void 0,
		has: (e, t) => t in e || t in rH
	})) : e.proxy;
}
function lD(e, t = !0) {
	return w(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function l$(e, t, n) {
	try {
		i9(-1);
		let r = arguments.length;
		if (2 !== r) return r > 3 ? n = Array.prototype.slice.call(arguments, 2) : 3 === r && ln(n) && (n = [n]), la(e, t, n);
		if (!E(t) || T(t)) return la(e, null, t);
		if (ln(t)) return la(e, null, [t]);
		return la(e, t);
	} finally {
		i9(1);
	}
}
function lV() {}
function lB(e, t, n, r) {
	let i = n[r];
	if (i && lj(i, e)) return i;
	let l = t();
	return l.memo = e.slice(), l.cacheIndex = r, n[r] = l;
}
function lj(e, t) {
	let n = e.memo;
	if (n.length != t.length) return !1;
	for (let e = 0; e < n.length; e++) if (U(n[e], t[e])) return !1;
	return i5 > 0 && i6 && i6.push(e), !0;
}
function se(e) {
	let t = {};
	for (let n in e) n in l4 || (t[n] = e[n]);
	if (!1 === e.css) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: l = `${n}-enter-from`, enterActiveClass: s = `${n}-enter-active`, enterToClass: o = `${n}-enter-to`, appearFromClass: a = l, appearActiveClass: c = s, appearToClass: u = o, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = e, f = function(e) {
		if (null == e) return null;
		{
			if (E(e)) return [function(e) {
				return K(e);
			}(e.enter), function(e) {
				return K(e);
			}(e.leave)];
			let t = function(e) {
				return K(e);
			}(e);
			return [t, t];
		}
	}(i), g = f && f[0], m = f && f[1], { onBeforeEnter: y, onEnter: _, onEnterCancelled: b, onLeave: x, onLeaveCancelled: C, onBeforeAppear: k = y, onAppear: T = _, onAppearCancelled: w = b } = t, N = (e, t, n, r) => {
		e._enterCancelled = r, sn(e, t ? u : o), sn(e, t ? c : s), n && n();
	}, A = (e, t) => {
		e._isLeaving = !1, sn(e, d), sn(e, h), sn(e, p), t && t();
	}, R = (e) => (t, n) => {
		let i = e ? T : _, s = () => N(t, e, n);
		l9(i, [t, s]), sr(() => {
			sn(t, e ? a : l), st(t, e ? u : o), l7(i) || sl(t, r, g, s);
		});
	};
	return S(t, {
		onBeforeEnter(e) {
			l9(y, [e]), st(e, l), st(e, s);
		},
		onBeforeAppear(e) {
			l9(k, [e]), st(e, a), st(e, c);
		},
		onEnter: R(!1),
		onAppear: R(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => A(e, t);
			st(e, d), e._enterCancelled ? (st(e, p), sc(e)) : (sc(e), st(e, p)), sr(() => {
				e._isLeaving && (sn(e, d), st(e, h), l7(x) || sl(e, r, m, n));
			}), l9(x, [e, n]);
		},
		onEnterCancelled(e) {
			N(e, !1, void 0, !0), l9(b, [e]);
		},
		onAppearCancelled(e) {
			N(e, !0, void 0, !0), l9(w, [e]);
		},
		onLeaveCancelled(e) {
			A(e), l9(C, [e]);
		}
	});
}
function st(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[l6] || (e[l6] = /* @__PURE__ */ new Set())).add(t);
}
function sn(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[l6];
	n && (n.delete(t), n.size || (e[l6] = void 0));
}
function sr(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
function sl(e, t, n, r) {
	let i = e._endId = ++si, l = () => {
		i === e._endId && r();
	};
	if (null != n) return setTimeout(l, n);
	let { type: s, timeout: o, propCount: a } = ss(e, t);
	if (!s) return r();
	let c = s + "end", u = 0, d = () => {
		e.removeEventListener(c, p), l();
	}, p = (t) => {
		t.target === e && ++u >= a && d();
	};
	setTimeout(() => {
		u < a && d();
	}, o + 1), e.addEventListener(c, p);
}
function ss(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${l2}Delay`), l = r(`${l2}Duration`), s = so(i, l), o = r(`${l3}Delay`), a = r(`${l3}Duration`), c = so(o, a), u = null, d = 0, p = 0;
	t === l2 ? s > 0 && (u = l2, d = s, p = l.length) : t === l3 ? c > 0 && (u = l3, d = c, p = a.length) : p = (u = (d = Math.max(s, c)) > 0 ? s > c ? l2 : l3 : null) ? u === l2 ? l.length : a.length : 0;
	let h = u === l2 && /\b(?:transform|all)(?:,|$)/.test(r(`${l2}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: p,
		hasTransform: h
	};
}
function so(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => sa(t) + sa(e[n])));
}
function sa(e) {
	return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function sc(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function sh(e, t) {
	e.style.display = t ? e[su] : "none", e[sd] = !t;
}
function sg(e) {
	let t = lC();
	if (!t) return;
	let n = t.ut = (n = e(t.proxy)) => {
		Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e) => sm(e, n));
	}, r = () => {
		let r = e(t.proxy);
		t.ce ? sm(t.ce, r) : function e(t, n) {
			if (128 & t.shapeFlag) {
				let r = t.suspense;
				t = r.activeBranch, r.pendingBranch && !r.isHydrating && r.effects.push(() => {
					e(r.activeBranch, n);
				});
			}
			for (; t.component;) t = t.component.subTree;
			if (1 & t.shapeFlag && t.el) sm(t.el, n);
			else if (t.type === iY) t.children.forEach((t) => e(t, n));
			else if (t.type === i2) {
				let { el: e, anchor: r } = t;
				for (; e && (sm(e, n), e !== r);) e = e.nextSibling;
			}
		}(t.subTree, r), n(r);
	};
	rx(() => {
		t9(r);
	}), rS(() => {
		n_(r, m, { flush: "post" });
		let e = new MutationObserver(r);
		e.observe(t.subTree.el.parentNode, { childList: !0 }), rT(() => e.disconnect());
	});
}
function sm(e, t) {
	if (1 === e.nodeType) {
		let r = e.style, i = "";
		for (let e in t) {
			var n;
			let l = null == (n = t[e]) ? "initial" : "string" == typeof n ? "" === n ? " " : n : String(n);
			r.setProperty(`--${e}`, l), i += `--${e}: ${l};`;
		}
		r[sf] = i;
	}
}
function s_(e, t, n) {
	if (T(n)) n.forEach((n) => s_(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = function(e, t) {
			let n = sS[t];
			if (n) return n;
			let r = L(t);
			if ("filter" !== r && r in e) return sS[t] = r;
			r = B(r);
			for (let n = 0; n < sb.length; n++) {
				let i = sb[n] + r;
				if (i in e) return sS[t] = i;
			}
			return t;
		}(e, t);
		sv.test(n) ? e.setProperty(V(r), n.replace(sv, ""), "important") : e[r] = n;
	}
}
function sC(e, t, n, r, i, l = es(t)) {
	if (r && t.startsWith("xlink:")) null == n ? e.removeAttributeNS(sx, t.slice(6, t.length)) : e.setAttributeNS(sx, t, n);
	else null == n || l && !(n || "" === n) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : A(n) ? String(n) : n);
}
function sk(e, t, n, r, i) {
	if ("innerHTML" === t || "textContent" === t) {
		null != n && (e[t] = "innerHTML" === t ? lZ(n) : n);
		return;
	}
	let l = e.tagName;
	if ("value" === t && "PROGRESS" !== l && !l.includes("-")) {
		let r = "OPTION" === l ? e.getAttribute("value") || "" : e.value, i = null == n ? "checkbox" === e.type ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let s = !1;
	if ("" === n || null == n) {
		let r = typeof e[t];
		if ("boolean" === r) {
			var o;
			n = !!(o = n) || "" === o;
		} else null == n && "string" === r ? (n = "", s = !0) : "number" === r && (n = 0, s = !0);
	}
	try {
		e[t] = n;
	} catch (e) {}
	s && e.removeAttribute(i || t);
}
function sT(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function sM(e, t, n) {
	let r, i = nz(e, t);
	"[object Object]" === (r = i, I.call(r)) && (i = S({}, i, t));
	class l extends sL {
		constructor(e) {
			super(i, e, n);
		}
	}
	return l.def = i, l;
}
function s$(e) {
	let t = lC();
	return t && t.ce || null;
}
function sV() {
	let e = s$();
	return e && e.shadowRoot;
}
function sB(e = "$style") {
	{
		let t = lC();
		if (!t) return f;
		let n = t.type.__cssModules;
		if (!n) return f;
		return n[e] || f;
	}
}
function sK(e) {
	let t = e.el;
	t[sH] && t[sH](), t[sq] && t[sq]();
}
function sz(e) {
	sU.set(e, sG(e.el));
}
function sJ(e) {
	let t = sj.get(e), n = sU.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, l = t.getBoundingClientRect(), s = 1, o = 1;
		return t.offsetWidth && (s = l.width / t.offsetWidth), t.offsetHeight && (o = l.height / t.offsetHeight), Number.isFinite(s) && 0 !== s || (s = 1), Number.isFinite(o) && 0 !== o || (o = 1), .01 > Math.abs(s - 1) && (s = 1), .01 > Math.abs(o - 1) && (o = 1), n.transform = n.webkitTransform = `translate(${r / s}px,${i / o}px)`, n.transitionDuration = "0s", e;
	}
}
function sG(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top
	};
}
function sQ(e) {
	e.target.composing = !0;
}
function sZ(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
function s1(e, t, n) {
	return t && (e = e.trim()), n && (e = W(e)), e;
}
function s6(e, { value: t, oldValue: n }, r) {
	let i;
	if (e._modelValue = t, T(t)) i = ea(t, r.props.value) > -1;
	else {
		let l;
		if ("[object Set]" === (l = t, I.call(l))) i = t.has(r.props.value);
		else {
			if (t === n) return;
			i = eo(t, s7(e, !0));
		}
	}
	e.checked !== i && (e.checked = i);
}
function s5(e, t) {
	let n, r = e.multiple, i = T(t);
	if (!r || i || "[object Set]" === (n = t, I.call(n))) {
		for (let n = 0, l = e.options.length; n < l; n++) {
			let l = e.options[n], s = s9(l);
			if (r) if (i) {
				let e = typeof s;
				"string" === e || "number" === e ? l.selected = t.some((e) => String(e) === String(s)) : l.selected = ea(t, s) > -1;
			} else l.selected = t.has(s);
			else if (eo(s9(l), t)) {
				e.selectedIndex !== n && (e.selectedIndex = n);
				return;
			}
		}
		r || -1 === e.selectedIndex || (e.selectedIndex = -1);
	}
}
function s9(e) {
	return "_value" in e ? e._value : e.value;
}
function s7(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
function ot(e, t) {
	switch (e) {
		case "SELECT": return s8;
		case "TEXTAREA": return s2;
		default: switch (t) {
			case "checkbox": return s3;
			case "radio": return s4;
			default: return s2;
		}
	}
}
function on(e, t, n, r, i) {
	let l = ot(e.tagName, n.props && n.props.type)[i];
	l && l(e, t, n, r);
}
function ou() {
	return c = oc ? c : i$(oa), oc = !0, c;
}
function og(e) {
	return e instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && e instanceof MathMLElement ? "mathml" : void 0;
}
function om(e) {
	return N(e) ? document.querySelector(e) : e;
}
function ae(e, t, n, r, i, l, s, o = !1, a = !1, c = !1, u = o7) {
	var d, p, h, f;
	return e && (o ? (e.helper(oA), e.helper((d = e.inSSR, p = c, d || p ? oE : oR))) : e.helper((h = e.inSSR, f = c, h || f ? oI : oO)), s && e.helper(oB)), {
		type: 13,
		tag: t,
		props: n,
		children: r,
		patchFlag: i,
		dynamicProps: l,
		directives: s,
		isBlock: o,
		disableTracking: a,
		isComponent: c,
		loc: u
	};
}
function at(e, t = o7) {
	return {
		type: 17,
		loc: t,
		elements: e
	};
}
function an(e, t = o7) {
	return {
		type: 15,
		loc: t,
		properties: e
	};
}
function ar(e, t) {
	return {
		type: 16,
		loc: o7,
		key: N(e) ? ai(e, !0) : e,
		value: t
	};
}
function ai(e, t = !1, n = o7, r = 0) {
	return {
		type: 4,
		loc: n,
		content: e,
		isStatic: t,
		constType: t ? 3 : r
	};
}
function al(e, t = o7) {
	return {
		type: 8,
		loc: t,
		children: e
	};
}
function as(e, t = [], n = o7) {
	return {
		type: 14,
		loc: n,
		callee: e,
		arguments: t
	};
}
function ao(e, t, n = !1, r = !1, i = o7) {
	return {
		type: 18,
		params: e,
		returns: t,
		newline: n,
		isSlot: r,
		loc: i
	};
}
function aa(e, t, n, r = !0) {
	return {
		type: 19,
		test: e,
		consequent: t,
		alternate: n,
		newline: r,
		loc: o7
	};
}
function ac(e, { helper: t, removeHelper: n, inSSR: r }) {
	if (!e.isBlock) {
		var i, l;
		e.isBlock = !0, n((i = e.isComponent, r || i ? oI : oO)), t(oA), t((l = e.isComponent, r || l ? oE : oR));
	}
}
function ap(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function ah(e) {
	return 32 === e || 10 === e || 9 === e || 12 === e || 13 === e;
}
function af(e) {
	return 47 === e || 62 === e || ah(e);
}
function ag(e) {
	let t = new Uint8Array(e.length);
	for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
	return t;
}
function ay(e) {
	throw e;
}
function av(e) {}
function a_(e, t, n, r) {
	let i = SyntaxError(String(`https://vuejs.org/error-reference/#compiler-${e}`));
	return i.code = e, i.loc = t, i;
}
function aS(e) {
	switch (e) {
		case "Teleport":
		case "teleport": return ok;
		case "Suspense":
		case "suspense": return oT;
		case "KeepAlive":
		case "keep-alive": return ow;
		case "BaseTransition":
		case "base-transition": return oN;
	}
}
function aE(e, t, n = !1) {
	for (let r = 0; r < e.props.length; r++) {
		let i = e.props[r];
		if (7 === i.type && (n || i.exp) && (N(t) ? i.name === t : t.test(i.name))) return i;
	}
}
function aR(e, t, n = !1, r = !1) {
	for (let i = 0; i < e.props.length; i++) {
		let l = e.props[i];
		if (6 === l.type) {
			if (n) continue;
			if (l.name === t && (l.value || r)) return l;
		} else if ("bind" === l.name && (l.exp || r) && aI(l.arg, t)) return l;
	}
}
function aI(e, t) {
	return !!(e && ab(e) && e.content === t);
}
function aO(e) {
	return 5 === e.type || 2 === e.type;
}
function aP(e) {
	return 7 === e.type && "pre" === e.name;
}
function aM(e) {
	return 7 === e.type && "slot" === e.name;
}
function aF(e) {
	return 1 === e.type && 3 === e.tagType;
}
function aD(e) {
	return 1 === e.type && 2 === e.tagType;
}
function a$(e, t = []) {
	if (e && !N(e) && 14 === e.type) {
		let n = e.callee;
		if (!N(n) && aL.has(n)) return a$(e.arguments[0], t.concat(e));
	}
	return [e, t];
}
function aV(e, t, n) {
	let r, i;
	if (13 !== e.type && function(e, t) {
		var n, r, i;
		if (4 !== t.key.type || "key" !== t.key.content) return !1;
		let l = e.arguments[2];
		if (l && !N(l)) {
			let [e] = a$(l);
			if (e && !N(e) && 15 === e.type && aB(t, e)) return !0;
		}
		return (n = e.arguments)[2] || (n[2] = "{}"), (r = e.arguments)[3] || (r[3] = "undefined"), (i = e.arguments)[4] || (i[4] = "undefined"), e.arguments[5] = t.value, !0;
	}(e, t)) return;
	let l = 13 === e.type ? e.props : e.arguments[2], s = [];
	if (l && !N(l) && 14 === l.type) {
		let e = a$(l);
		l = e[0], i = (s = e[1])[s.length - 1];
	}
	if (null == l || N(l)) r = an([t]);
	else if (14 === l.type) {
		let e = l.arguments[0];
		N(e) || 15 !== e.type ? l.callee === oX ? r = as(n.helper(oW), [an([t]), l]) : l.arguments.unshift(an([t])) : aB(t, e) || e.properties.unshift(t), r || (r = l);
	} else 15 === l.type ? (aB(t, l) || l.properties.unshift(t), r = l) : (r = as(n.helper(oW), [an([t]), l]), i && i.callee === oG && (i = s[s.length - 2]));
	13 === e.type ? i ? i.arguments[0] = r : e.props = r : i ? i.arguments[0] = r : e.arguments[2] = r;
}
function aB(e, t) {
	let n = !1;
	if (4 === e.key.type) {
		let r = e.key.content;
		n = t.properties.some((e) => 4 === e.key.type && e.key.content === r);
	}
	return n;
}
function aj(e, t) {
	return `_${t}_${e.replace(/[^\w]/g, (t, n) => "-" === t ? "_" : e.charCodeAt(n).toString())}`;
}
function aH(e) {
	for (let t = 0; t < e.length; t++) if (!ah(e.charCodeAt(t))) return !1;
	return !0;
}
function aq(e) {
	return 2 === e.type && aH(e.content) || 12 === e.type && aq(e.content);
}
function aW(e) {
	return 3 === e.type || aq(e);
}
function a9(e, t) {
	return aG.slice(e, t);
}
function a7(e) {
	a4.inSFCRoot && (aX.innerLoc = ca(e + 1, e + 1)), co(aX);
	let { tag: t, ns: n } = aX;
	0 === n && az.isPreTag(t) && a1++, az.isVoidTag(t) ? ct(aX, e) : (a6.unshift(aX), (1 === n || 2 === n) && (a4.inXML = !0)), aX = null;
}
function ce(e, t, n) {
	{
		let t = a6[0] && a6[0].tag;
		"script" !== t && "style" !== t && e.includes("&") && (e = az.decodeEntities(e, !1));
	}
	let r = a6[0] || aJ, i = r.children[r.children.length - 1];
	i && 2 === i.type ? (i.content += e, cc(i.loc, n)) : r.children.push({
		type: 2,
		content: e,
		loc: ca(t, n)
	});
}
function ct(e, t, n = !1) {
	n ? cc(e.loc, cn(t, 60)) : cc(e.loc, function(e) {
		let t = e;
		for (; 62 !== aG.charCodeAt(t) && t < aG.length - 1;) t++;
		return t;
	}(t) + 1), a4.inSFCRoot && (e.children.length ? e.innerLoc.end = S({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = S({}, e.innerLoc.start), e.innerLoc.source = a9(e.innerLoc.start.offset, e.innerLoc.end.offset));
	let { tag: r, ns: i, children: l } = e;
	if (!a2 && ("slot" === r ? e.tagType = 2 : !function({ tag: e, props: t }) {
		if ("template" === e) {
			for (let e = 0; e < t.length; e++) if (7 === t[e].type && cr.has(t[e].name)) return !0;
		}
		return !1;
	}(e) ? function({ tag: e, props: t }) {
		var n;
		if (az.isCustomElement(e)) return !1;
		if ("component" === e || (n = e.charCodeAt(0)) > 64 && n < 91 || aS(e) || az.isBuiltInComponent && az.isBuiltInComponent(e) || az.isNativeTag && !az.isNativeTag(e)) return !0;
		for (let e = 0; e < t.length; e++) {
			let n = t[e];
			if (6 === n.type && "is" === n.name && n.value && n.value.content.startsWith("vue:")) return !0;
		}
		return !1;
	}(e) && (e.tagType = 1) : e.tagType = 3), a4.inRCDATA || (e.children = cl(l)), 0 === i && az.isIgnoreNewlineTag(r)) {
		let e = l[0];
		e && 2 === e.type && (e.content = e.content.replace(/^\r?\n/, ""));
	}
	0 === i && az.isPreTag(r) && a1--, a3 === e && (a2 = a4.inVPre = !1, a3 = null), a4.inXML && (a6[0] ? a6[0].ns : az.ns) === 0 && (a4.inXML = !1);
}
function cn(e, t) {
	let n = e;
	for (; aG.charCodeAt(n) !== t && n >= 0;) n--;
	return n;
}
function cl(e) {
	let t = "preserve" !== az.whitespace, n = !1;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (2 === i.type) if (a1) i.content = i.content.replace(ci, `
`);
		else if (aH(i.content)) {
			let l = e[r - 1] && e[r - 1].type, s = e[r + 1] && e[r + 1].type;
			!l || !s || t && (3 === l && (3 === s || 1 === s) || 1 === l && (3 === s || 1 === s && function(e) {
				for (let t = 0; t < e.length; t++) {
					let n = e.charCodeAt(t);
					if (10 === n || 13 === n) return !0;
				}
				return !1;
			}(i.content))) ? (n = !0, e[r] = null) : i.content = " ";
		} else t && (i.content = cs(i.content));
	}
	return n ? e.filter(Boolean) : e;
}
function cs(e) {
	let t = "", n = !1;
	for (let r = 0; r < e.length; r++) ah(e.charCodeAt(r)) ? n || (t += " ", n = !0) : (t += e[r], n = !1);
	return t;
}
function co(e) {
	(a6[0] || aJ).children.push(e);
}
function ca(e, t) {
	return {
		start: a4.getPos(e),
		end: null == t ? t : a4.getPos(t),
		source: null == t ? t : a9(e, t)
	};
}
function cc(e, t) {
	e.end = a4.getPos(t), e.source = a9(e.start.offset, t);
}
function cu(e, t = !1, n, r = 0, i = 0) {
	return ai(e, t, n, r);
}
function cd(e, t, n) {
	az.onError(a_(e, ca(t, t)));
}
function cp(e) {
	let t = e.children.filter((e) => 3 !== e.type);
	return 1 !== t.length || 1 !== t[0].type || aD(t[0]) ? null : t[0];
}
function ch(e, t) {
	let { constantCache: n } = t;
	switch (e.type) {
		case 1:
			if (0 !== e.tagType) return 0;
			let r = n.get(e);
			if (void 0 !== r) return r;
			let i = e.codegenNode;
			if (13 !== i.type || i.isBlock && "svg" !== e.tag && "foreignObject" !== e.tag && "math" !== e.tag) return 0;
			if (void 0 !== i.patchFlag) return n.set(e, 0), 0;
			{
				let r = 3, c = cg(e, t);
				if (0 === c) return n.set(e, 0), 0;
				c < r && (r = c);
				for (let i = 0; i < e.children.length; i++) {
					let l = ch(e.children[i], t);
					if (0 === l) return n.set(e, 0), 0;
					l < r && (r = l);
				}
				if (r > 1) for (let i = 0; i < e.props.length; i++) {
					let l = e.props[i];
					if (7 === l.type && "bind" === l.name && l.exp) {
						let i = ch(l.exp, t);
						if (0 === i) return n.set(e, 0), 0;
						i < r && (r = i);
					}
				}
				if (i.isBlock) {
					var l, s, o, a;
					for (let t = 0; t < e.props.length; t++) if (7 === e.props[t].type) return n.set(e, 0), 0;
					t.removeHelper(oA), t.removeHelper((l = t.inSSR, s = i.isComponent, l || s ? oE : oR)), i.isBlock = !1, t.helper((o = t.inSSR, a = i.isComponent, o || a ? oI : oO));
				}
				return n.set(e, r), r;
			}
		case 2:
		case 3: return 3;
		case 9:
		case 11:
		case 10:
		default: return 0;
		case 5:
		case 12: return ch(e.content, t);
		case 4: return e.constType;
		case 8:
			let c = 3;
			for (let n = 0; n < e.children.length; n++) {
				let r = e.children[n];
				if (N(r) || A(r)) continue;
				let i = ch(r, t);
				if (0 === i) return 0;
				i < c && (c = i);
			}
			return c;
		case 20: return 2;
	}
}
function cg(e, t) {
	let n = 3, r = cm(e);
	if (r && 15 === r.type) {
		let { properties: e } = r;
		for (let r = 0; r < e.length; r++) {
			let i, { key: l, value: s } = e[r], o = ch(l, t);
			if (0 === o) return o;
			if (o < n && (n = o), 0 === (i = 4 === s.type ? ch(s, t) : 14 === s.type ? function e(t, n) {
				if (14 === t.type && !N(t.callee) && cf.has(t.callee)) {
					let r = t.arguments[0];
					if (4 === r.type) return ch(r, n);
					if (14 === r.type) return e(r, n);
				}
				return 0;
			}(s, t) : 0)) return i;
			i < n && (n = i);
		}
	}
	return n;
}
function cm(e) {
	let t = e.codegenNode;
	if (13 === t.type) return t.props;
}
function cy(e, t) {
	t.currentNode = e;
	let { nodeTransforms: n } = t, r = [];
	for (let i = 0; i < n.length; i++) {
		let l = n[i](e, t);
		if (l && (T(l) ? r.push(...l) : r.push(l)), !t.currentNode) return;
		e = t.currentNode;
	}
	switch (e.type) {
		case 3:
			t.ssr || t.helper(oP);
			break;
		case 5:
			t.ssr || t.helper(oq);
			break;
		case 9:
			for (let n = 0; n < e.branches.length; n++) cy(e.branches[n], t);
			break;
		case 10:
		case 11:
		case 1:
		case 0:
			var i = e;
			let l = 0, s = () => {
				l--;
			};
			for (; l < i.children.length; l++) {
				let e = i.children[l];
				N(e) || (t.grandParent = t.parent, t.parent = i, t.childIndex = l, t.onNodeRemoved = s, cy(e, t));
			}
	}
	t.currentNode = e;
	let o = r.length;
	for (; o--;) r[o]();
}
function cv(e, t) {
	let n = N(e) ? (t) => t === e : (t) => e.test(t);
	return (e, r) => {
		if (1 === e.type) {
			let { props: i } = e;
			if (3 === e.tagType && i.some(aM)) return;
			let l = [];
			for (let s = 0; s < i.length; s++) {
				let o = i[s];
				if (7 === o.type && n(o.name)) {
					i.splice(s, 1), s--;
					let n = t(e, o, r);
					n && l.push(n);
				}
			}
			return l;
		}
	};
}
function cS(e, t, { helper: n, push: r, newline: i, isTS: l }) {
	let s = n("component" === t ? oD : o$);
	for (let n = 0; n < e.length; n++) {
		let o = e[n], a = o.endsWith("__self");
		a && (o = o.slice(0, -6)), r(`const ${aj(o, t)} = ${s}(${JSON.stringify(o)}${a ? ", true" : ""})${l ? "!" : ""}`), n < e.length - 1 && i();
	}
}
function cx(e, t) {
	let n = e.length > 3;
	t.push("["), n && t.indent(), cC(e, t, n), n && t.deindent(), t.push("]");
}
function cC(e, t, n = !1, r = !0) {
	let { push: i, newline: l } = t;
	for (let s = 0; s < e.length; s++) {
		let o = e[s];
		N(o) ? i(o, -3) : T(o) ? cx(o, t) : ck(o, t), s < e.length - 1 && (n ? (r && i(","), l()) : r && i(", "));
	}
}
function ck(e, t) {
	var n, r, i;
	if (N(e)) return void t.push(e, -3);
	if (A(e)) return void t.push(t.helper(e));
	switch (e.type) {
		case 1:
		case 9:
		case 11:
		case 12:
			ck(e.codegenNode, t);
			break;
		case 2:
			n = e, t.push(JSON.stringify(n.content), -3, n);
			break;
		case 4:
			cT(e, t);
			break;
		case 5:
			(function(e, t) {
				let { push: n, helper: r, pure: i } = t;
				i && n(c_), n(`${r(oq)}(`), ck(e.content, t), n(")");
			})(e, t);
			break;
		case 8:
			cw(e, t);
			break;
		case 3:
			(function(e, t) {
				let { push: n, helper: r, pure: i } = t;
				i && n(c_), n(`${r(oP)}(${JSON.stringify(e.content)})`, -3, e);
			})(e, t);
			break;
		case 13:
			(function(e, t) {
				var n, r;
				let i, { push: l, helper: s, pure: o } = t, { tag: a, props: c, children: u, patchFlag: d, dynamicProps: p, directives: h, isBlock: f, disableTracking: g, isComponent: m } = e;
				d && (i = String(d)), h && l(s(oB) + "("), f && l(`(${s(oA)}(${g ? "true" : ""}), `), o && l(c_), l(s(f ? (n = t.inSSR, n || m ? oE : oR) : (r = t.inSSR, r || m ? oI : oO)) + "(", -2, e), cC(function(e) {
					let t = e.length;
					for (; t-- && null == e[t];);
					return e.slice(0, t + 1).map((e) => e || "null");
				}([
					a,
					c,
					u,
					i,
					p
				]), t), l(")"), f && l(")"), h && (l(", "), ck(h, t), l(")"));
			})(e, t);
			break;
		case 14:
			(function(e, t) {
				let { push: n, helper: r, pure: i } = t, l = N(e.callee) ? e.callee : r(e.callee);
				i && n(c_), n(l + "(", -2, e), cC(e.arguments, t), n(")");
			})(e, t);
			break;
		case 15:
			(function(e, t) {
				let { push: n, indent: r, deindent: i, newline: l } = t, { properties: s } = e;
				if (!s.length) return n("{}", -2, e);
				let o = s.length > 1;
				n(o ? "{" : "{ "), o && r();
				for (let e = 0; e < s.length; e++) {
					let { key: r, value: i } = s[e];
					(function(e, t) {
						let { push: n } = t;
						if (8 === e.type) n("["), cw(e, t), n("]");
						else if (e.isStatic) {
							let t;
							n((t = e.content, ax.test(t)) ? JSON.stringify(e.content) : e.content, -2, e);
						} else n(`[${e.content}]`, -3, e);
					})(r, t), n(": "), ck(i, t), e < s.length - 1 && (n(","), l());
				}
				o && i(), n(o ? "}" : " }");
			})(e, t);
			break;
		case 17:
			r = e, i = t, cx(r.elements, i);
			break;
		case 18:
			(function(e, t) {
				let { push: n, indent: r, deindent: i } = t, { params: l, returns: s, body: o, newline: a, isSlot: c } = e;
				c && n(`_${o9[o3]}(`), n("(", -2, e), T(l) ? cC(l, t) : l && ck(l, t), n(") => "), (a || o) && (n("{"), r()), s ? (a && n("return "), T(s) ? cx(s, t) : ck(s, t)) : o && ck(o, t), (a || o) && (i(), n("}")), c && n(")");
			})(e, t);
			break;
		case 19:
			(function(e, t) {
				let { test: n, consequent: r, alternate: i, newline: l } = e, { push: s, indent: o, deindent: a, newline: c } = t;
				if (4 === n.type) {
					let e, r = (e = n.content, !!ax.test(e));
					r && s("("), cT(n, t), r && s(")");
				} else s("("), ck(n, t), s(")");
				l && o(), t.indentLevel++, l || s(" "), s("? "), ck(r, t), t.indentLevel--, l && c(), l || s(" "), s(": ");
				let u = 19 === i.type;
				!u && t.indentLevel++, ck(i, t), !u && t.indentLevel--, l && a(!0);
			})(e, t);
			break;
		case 20:
			(function(e, t) {
				let { push: n, helper: r, indent: i, deindent: l, newline: s } = t, { needPauseTracking: o, needArraySpread: a } = e;
				a && n("[...("), n(`_cache[${e.index}] || (`), o && (i(), n(`${r(o0)}(-1`), e.inVOnce && n(", true"), n("),"), s(), n("(")), n(`_cache[${e.index}] = `), ck(e.value, t), o && (n(`).cacheIndex = ${e.index},`), s(), n(`${r(o0)}(1),`), s(), n(`_cache[${e.index}]`), l()), n(")"), a && n(")]");
			})(e, t);
			break;
		case 21: cC(e.body, t, !0, !1);
	}
}
function cT(e, t) {
	let { content: n, isStatic: r } = e;
	t.push(r ? JSON.stringify(n) : n, -3, e);
}
function cw(e, t) {
	for (let n = 0; n < e.children.length; n++) {
		let r = e.children[n];
		N(r) ? t.push(r, -3) : ck(r, t);
	}
}
function cA(e, t) {
	let n = 3 === e.tagType;
	return {
		type: 10,
		loc: e.loc,
		condition: "else" === t.name ? void 0 : t.exp,
		children: n && !aE(e, "for") ? e.children : [e],
		userKey: aR(e, "key"),
		isTemplateIf: n
	};
}
function cE(e, t, n) {
	return e.condition ? aa(e.condition, cR(e, t, n), as(n.helper(oP), ["\"\"", "true"])) : cR(e, t, n);
}
function cR(e, t, n) {
	let { helper: r } = n, i = ar("key", ai(`${t}`, !1, o7, 2)), { children: l } = e, s = l[0];
	if (1 !== l.length || 1 !== s.type) if (1 !== l.length || 11 !== s.type) return ae(n, r(oC), an([i]), l, 64, void 0, void 0, !0, !1, !1, e.loc);
	else {
		let e = s.codegenNode;
		return aV(e, i, n), e;
	}
	{
		let e = s.codegenNode, t = 14 === e.type && e.callee === o8 ? e.arguments[1].returns : e;
		return 13 === t.type && ac(t, n), aV(t, i, n), e;
	}
}
function cO(e, t) {
	e.finalized || (e.finalized = !0);
}
function cP({ value: e, key: t, index: n }, r = []) {
	var i = [
		e,
		t,
		n,
		...r
	];
	let l = i.length;
	for (; l-- && !i[l];);
	return i.slice(0, l + 1).map((e, t) => e || ai("_".repeat(t + 1), !1));
}
function cD(e, t, n) {
	let r = [ar("name", e), ar("fn", t)];
	return null != n && r.push(ar("key", ai(String(n), !0))), an(r);
}
function cV(e, t, n = e.props, r, i, l = !1) {
	let s, { tag: o, loc: a, children: c } = e, u = [], d = [], p = [], h = c.length > 0, f = !1, g = !1, m = 0, y = !1, b = !1, S = !1, x = !1, C = !1, k = !1, T = [], w = (e) => {
		u.length && (d.push(an(cB(u), a)), u = []), e && d.push(e);
	}, N = () => {
		t.scopes.vFor > 0 && u.push(ar(ai("ref_for", !0), ai("true")));
	}, E = ({ key: e, value: n }) => {
		if (ab(e)) {
			let l = e.content, s = _(l);
			s && (!r || i) && "onclick" !== l.toLowerCase() && "onUpdate:modelValue" !== l && !P(l) && (x = !0), s && P(l) && (k = !0), "ref" === l && (y = !0), s && 14 === n.type && (n = n.arguments[0]), 20 === n.type || (4 === n.type || 8 === n.type) && ch(n, t) > 0 || ("class" === l ? b = !0 : "style" === l ? S = !0 : "ref" === l || "key" === l || T.includes(l) || T.push(l), r && ("class" === l || "style" === l) && !T.includes(l) && T.push(l));
		} else C = !0;
	};
	for (let i = 0; i < n.length; i++) {
		let s = n[i];
		if (6 === s.type) {
			let { loc: e, name: t, nameLoc: n, value: r } = s;
			if ("ref" === t && (y = !0, N()), "is" === t && (cj(o) || r && r.content.startsWith("vue:"))) continue;
			u.push(ar(ai(t, !0, n), ai(r ? r.content : "", !0, r ? r.loc : e)));
		} else {
			let { name: n, arg: i, exp: c, loc: y, modifiers: _ } = s, b = "bind" === n, S = "on" === n;
			if ("slot" === n) {
				r || t.onError(a_(40, y));
				continue;
			}
			if ("once" === n || "memo" === n || "is" === n || b && aI(i, "is") && cj(o) || S && l) continue;
			if (b && aI(i, "key") && (f = !0), S && h && i && ab(i) && "vue:beforeUpdate" === L(i.content) && (f = !0, g = !0), b && aI(i, "ref") && N(), !i && (b || S)) {
				C = !0, c ? b ? (N(), w(), d.push(c)) : w({
					type: 14,
					loc: y,
					callee: t.helper(oX),
					arguments: r ? [c] : [c, "true"]
				}) : t.onError(a_(b ? 34 : 35, y));
				continue;
			}
			b && _.some((e) => "prop" === e.content) && (m |= 32);
			let x = t.directiveTransforms[n];
			if (x) {
				let { props: n, needRuntime: r } = x(s, e, t);
				l || n.forEach(E), S && i && !ab(i) ? w(an(n, a)) : u.push(...n), r && (p.push(s), A(r) && cL.set(s, r));
			} else !M(n) && (p.push(s), h && (f = !0, g = !0));
		}
	}
	d.length ? (w(), s = d.length > 1 ? as(t.helper(oW), d, a) : d[0]) : u.length && (s = an(cB(u), a)), C ? m |= 16 : (b && !r && (m |= 2), S && !r && (m |= 4), T.length && (m |= 8), x && (m |= 32));
	let R = (0 === m || 32 === m) && (y || k || p.length > 0);
	if (!f && R && (m |= 512), !t.inSSR && s) switch (s.type) {
		case 15:
			let I = -1, O = -1, F = !1;
			for (let e = 0; e < s.properties.length; e++) {
				let t = s.properties[e].key;
				ab(t) ? "class" === t.content ? I = e : "style" === t.content && (O = e) : t.isHandlerKey || (F = !0);
			}
			let D = s.properties[I], $ = s.properties[O];
			F ? s = as(t.helper(oJ), [s]) : (D && !ab(D.value) && (D.value = as(t.helper(oK), [D.value])), $ && (S || 4 === $.value.type && "[" === $.value.content.trim()[0] || 17 === $.value.type) && ($.value = as(t.helper(oz), [$.value])));
			break;
		case 14: break;
		default: s = as(t.helper(oJ), [as(t.helper(oG), [s])]);
	}
	return {
		props: s,
		directives: p,
		patchFlag: m,
		dynamicPropNames: T,
		shouldUseBlock: f,
		needsPatch: R,
		isBlockRequired: g
	};
}
function cB(e) {
	let t = /* @__PURE__ */ new Map(), n = [];
	for (let l = 0; l < e.length; l++) {
		var r, i;
		let s = e[l];
		if (8 === s.key.type || !s.key.isStatic) {
			n.push(s);
			continue;
		}
		let o = s.key.content, a = t.get(o);
		a ? ("style" === o || "class" === o || _(o)) && (r = a, i = s, 17 === r.value.type ? r.value.elements.push(i.value) : r.value = at([r.value, i.value], r.loc)) : (t.set(o, s), n.push(s));
	}
	return n;
}
function cj(e) {
	return "component" === e || "Component" === e;
}
function cX(e = []) {
	return { props: e };
}
function uu(e, t) {
	if (!N(e)) if (!e.nodeType) return m;
	else e = e.innerHTML;
	let n = e + JSON.stringify(t, (e, t) => "function" == typeof t ? t.toString() : t), r = uc[n];
	if (r) return r;
	if ("#" === e[0]) {
		let t = document.querySelector(e);
		e = t ? t.innerHTML : "";
	}
	let i = S({
		hoistStatic: !0,
		onError: void 0,
		onWarn: m
	}, t);
	!i.isCustomElement && "u" > typeof customElements && (i.isCustomElement = (e) => !!customElements.get(e));
	let { code: l } = function(e, t = {}) {
		return function(e, t = {}) {
			var n;
			let r, i = t.onError || ay, l = "module" === t.mode;
			!0 === t.prefixIdentifiers ? i(a_(48)) : l && i(a_(49)), t.cacheHandlers && i(a_(50)), t.scopeId && !l && i(a_(51));
			let s = S({}, t, { prefixIdentifiers: !1 }), o = N(e) ? function(e, t) {
				if (a4.reset(), aX = null, aQ = null, aZ = "", aY = -1, a0 = -1, a6.length = 0, aG = e, az = S({}, aK), t) {
					let e;
					for (e in t) null != t[e] && (az[e] = t[e]);
				}
				a4.mode = "html" === az.parseMode ? 1 : 2 * ("sfc" === az.parseMode), a4.inXML = 1 === az.ns || 2 === az.ns;
				let n = t && t.delimiters;
				n && (a4.delimiterOpen = ag(n[0]), a4.delimiterClose = ag(n[1]));
				let r = aJ = function(e, t = "") {
					return {
						type: 0,
						source: t,
						children: e,
						helpers: /* @__PURE__ */ new Set(),
						components: [],
						directives: [],
						hoists: [],
						imports: [],
						cached: [],
						temps: 0,
						codegenNode: void 0,
						loc: o7
					};
				}([], e);
				return a4.parse(aG), r.loc = ca(0, e.length), r.children = cl(r.children), aJ = null, r;
			}(e, s) : e, [a, c] = [[
				cY,
				cJ,
				cN,
				cZ,
				cI,
				cU,
				c$,
				cF,
				cK
			], {
				on: cH,
				bind: cq,
				model: cG
			}];
			return r = function(e, { filename: t = "", prefixIdentifiers: n = !1, hoistStatic: r = !1, hmr: i = !1, cacheHandlers: l = !1, nodeTransforms: s = [], directiveTransforms: o = {}, transformHoist: a = null, isBuiltInComponent: c = m, isCustomElement: u = m, expressionPlugins: d = [], scopeId: p = null, slotted: h = !0, ssr: g = !1, inSSR: y = !1, ssrCssVars: _ = "", bindingMetadata: b = f, inline: S = !1, isTS: x = !1, onError: C = ay, onWarn: k = av, compatConfig: T }) {
				let w = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), A = {
					filename: t,
					selfName: w && B(L(w[1])),
					prefixIdentifiers: n,
					hoistStatic: r,
					hmr: i,
					cacheHandlers: l,
					nodeTransforms: s,
					directiveTransforms: o,
					transformHoist: a,
					isBuiltInComponent: c,
					isCustomElement: u,
					expressionPlugins: d,
					scopeId: p,
					slotted: h,
					ssr: g,
					inSSR: y,
					ssrCssVars: _,
					bindingMetadata: b,
					inline: S,
					isTS: x,
					onError: C,
					onWarn: k,
					compatConfig: T,
					root: e,
					helpers: /* @__PURE__ */ new Map(),
					components: /* @__PURE__ */ new Set(),
					directives: /* @__PURE__ */ new Set(),
					hoists: [],
					imports: [],
					cached: [],
					constantCache: /* @__PURE__ */ new WeakMap(),
					vForMemoKeyedNodes: /* @__PURE__ */ new WeakSet(),
					temps: 0,
					identifiers: Object.create(null),
					scopes: {
						vFor: 0,
						vSlot: 0,
						vPre: 0,
						vOnce: 0
					},
					parent: null,
					grandParent: null,
					currentNode: e,
					childIndex: 0,
					inVOnce: !1,
					helper(e) {
						let t = A.helpers.get(e) || 0;
						return A.helpers.set(e, t + 1), e;
					},
					removeHelper(e) {
						let t = A.helpers.get(e);
						if (t) {
							let n = t - 1;
							n ? A.helpers.set(e, n) : A.helpers.delete(e);
						}
					},
					helperString: (e) => `_${o9[A.helper(e)]}`,
					replaceNode(e) {
						A.parent.children[A.childIndex] = A.currentNode = e;
					},
					removeNode(e) {
						let t = A.parent.children, n = e ? t.indexOf(e) : A.currentNode ? A.childIndex : -1;
						e && e !== A.currentNode ? A.childIndex > n && (A.childIndex--, A.onNodeRemoved()) : (A.currentNode = null, A.onNodeRemoved()), A.parent.children.splice(n, 1);
					},
					onNodeRemoved: m,
					addIdentifiers(e) {},
					removeIdentifiers(e) {},
					hoist(e) {
						N(e) && (e = ai(e)), A.hoists.push(e);
						let t = ai(`_hoisted_${A.hoists.length}`, !1, e.loc, 2);
						return t.hoisted = e, t;
					},
					cache(e, t = !1, n = !1) {
						let r = function(e, t, n = !1, r = !1) {
							return {
								type: 20,
								index: e,
								value: t,
								needPauseTracking: n,
								inVOnce: r,
								needArraySpread: !1,
								loc: o7
							};
						}(A.cached.length, e, t, n);
						return A.cached.push(r), r;
					}
				};
				return A;
			}(o, n = S({}, s, {
				nodeTransforms: [...a, ...t.nodeTransforms || []],
				directiveTransforms: S({}, c, t.directiveTransforms || {})
			})), cy(o, r), n.hoistStatic && function e(t, n, r, i = !1, l = !1) {
				let { children: s } = t, o = [];
				for (let n = 0; n < s.length; n++) {
					let a = s[n];
					if (1 === a.type && 0 === a.tagType) {
						let e = i ? 0 : ch(a, r);
						if (e > 0) {
							if (e >= 2) {
								a.codegenNode.patchFlag = -1, o.push(a);
								continue;
							}
						} else {
							let e = a.codegenNode;
							if (13 === e.type) {
								let t = e.patchFlag;
								if ((void 0 === t || 512 === t || 1 === t) && cg(a, r) >= 2) {
									let t = cm(a);
									t && (e.props = r.hoist(t));
								}
								e.dynamicProps && (e.dynamicProps = r.hoist(e.dynamicProps));
							}
						}
					} else if (12 === a.type && (i ? 0 : ch(a, r)) >= 2) {
						14 === a.codegenNode.type && a.codegenNode.arguments.length > 0 && a.codegenNode.arguments.push("-1"), o.push(a);
						continue;
					}
					if (1 === a.type) {
						let n = 1 === a.tagType;
						n && r.scopes.vSlot++, e(a, t, r, !1, l), n && r.scopes.vSlot--;
					} else if (11 === a.type) e(a, t, r, 1 === a.children.length, !0);
					else if (9 === a.type) for (let n = 0; n < a.branches.length; n++) e(a.branches[n], t, r, 1 === a.branches[n].children.length, l);
				}
				let a = !1;
				if (o.length === s.length && 1 === t.type) {
					if (0 === t.tagType && t.codegenNode && 13 === t.codegenNode.type && T(t.codegenNode.children)) t.codegenNode.children = c(at(t.codegenNode.children)), a = !0;
					else if (1 === t.tagType && t.codegenNode && 13 === t.codegenNode.type && t.codegenNode.children && !T(t.codegenNode.children) && 15 === t.codegenNode.children.type) {
						let e = u(t.codegenNode, "default");
						e && (e.returns = c(at(e.returns)), a = !0);
					} else if (3 === t.tagType && n && 1 === n.type && 1 === n.tagType && n.codegenNode && 13 === n.codegenNode.type && n.codegenNode.children && !T(n.codegenNode.children) && 15 === n.codegenNode.children.type) {
						let e = aE(t, "slot", !0), r = e && e.arg && u(n.codegenNode, e.arg);
						r && (r.returns = c(at(r.returns)), a = !0);
					}
				}
				if (!a) for (let e of o) e.codegenNode = r.cache(e.codegenNode);
				function c(e) {
					let t = r.cache(e);
					return t.needArraySpread = !0, t;
				}
				function u(e, t) {
					if (e.children && !T(e.children) && 15 === e.children.type) {
						let n = e.children.properties.find((e) => e.key === t || e.key.content === t);
						return n && n.value;
					}
				}
				o.length && r.transformHoist && r.transformHoist(s, r, t);
			}(o, void 0, r, !!cp(o)), n.ssr || function(e, t) {
				let { helper: n } = t, { children: r } = e;
				if (1 === r.length) {
					let n = cp(e);
					if (n && n.codegenNode) {
						let r = n.codegenNode;
						13 === r.type && ac(r, t), e.codegenNode = r;
					} else e.codegenNode = r[0];
				} else r.length > 1 && (e.codegenNode = ae(t, n(oC), void 0, e.children, 64, void 0, void 0, !0, void 0, !1));
			}(o, r), o.helpers = /* @__PURE__ */ new Set([...r.helpers.keys()]), o.components = [...r.components], o.directives = [...r.directives], o.imports = r.imports, o.hoists = r.hoists, o.temps = r.temps, o.cached = r.cached, o.transformed = !0, function(e, t = {}) {
				let n = function(e, { mode: t = "function", prefixIdentifiers: n = "module" === t, sourceMap: r = !1, filename: i = "template.vue.html", scopeId: l = null, optimizeImports: s = !1, runtimeGlobalName: o = "Vue", runtimeModuleName: a = "vue", ssrRuntimeModuleName: c = "vue/server-renderer", ssr: u = !1, isTS: d = !1, inSSR: p = !1 }) {
					let h = {
						mode: t,
						prefixIdentifiers: n,
						sourceMap: r,
						filename: i,
						scopeId: l,
						optimizeImports: s,
						runtimeGlobalName: o,
						runtimeModuleName: a,
						ssrRuntimeModuleName: c,
						ssr: u,
						isTS: d,
						inSSR: p,
						source: e.source,
						code: "",
						column: 1,
						line: 1,
						offset: 0,
						indentLevel: 0,
						pure: !1,
						map: void 0,
						helper: (e) => `_${o9[e]}`,
						push(e, t = -2, n) {
							h.code += e;
						},
						indent() {
							f(++h.indentLevel);
						},
						deindent(e = !1) {
							e ? --h.indentLevel : f(--h.indentLevel);
						},
						newline() {
							f(h.indentLevel);
						}
					};
					function f(e) {
						h.push(`
` + "  ".repeat(e), 0);
					}
					return h;
				}(e, t);
				t.onContextCreated && t.onContextCreated(n);
				let { mode: r, push: i, prefixIdentifiers: l, indent: s, deindent: o, newline: a, ssr: c } = n, u = Array.from(e.helpers), d = u.length > 0, p = !l && "module" !== r;
				(function(e, t) {
					let { push: n, newline: r, runtimeGlobalName: i } = t, l = Array.from(e.helpers);
					if (l.length > 0 && (n(`const _Vue = ${i}
`, -1), e.hoists.length)) n(`const { ${[
						oI,
						oO,
						oP,
						oM,
						oF
					].filter((e) => l.includes(e)).map(cb).join(", ")} } = _Vue
`, -1);
					(function(e, t) {
						if (!e.length) return;
						t.pure = !0;
						let { push: n, newline: r } = t;
						r();
						for (let i = 0; i < e.length; i++) {
							let l = e[i];
							l && (n(`const _hoisted_${i + 1} = `), ck(l, t), r());
						}
						t.pure = !1;
					})(e.hoists, t), r(), n("return ");
				})(e, n);
				let h = (c ? [
					"_ctx",
					"_push",
					"_parent",
					"_attrs"
				] : ["_ctx", "_cache"]).join(", ");
				if (i(`function ${c ? "ssrRender" : "render"}(${h}) {`), s(), p && (i("with (_ctx) {"), s(), d && (i(`const { ${u.map(cb).join(", ")} } = _Vue
`, -1), a())), e.components.length && (cS(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (cS(e.directives, "directive", n), e.temps > 0 && a()), e.temps > 0) {
					i("let ");
					for (let t = 0; t < e.temps; t++) i(`${t > 0 ? ", " : ""}_temp${t}`);
				}
				return (e.components.length || e.directives.length || e.temps) && (i(`
`, 0), a()), c || i("return "), e.codegenNode ? ck(e.codegenNode, n) : i("null"), p && (o(), i("}")), o(), i("}"), {
					ast: e,
					code: n.code,
					preamble: "",
					map: n.map ? n.map.toJSON() : void 0
				};
			}(o, s);
		}(e, S({}, ue, t, {
			nodeTransforms: [
				us,
				...uo,
				...t.nodeTransforms || []
			],
			directiveTransforms: S({}, ua, t.directiveTransforms || {}),
			transformHoist: null
		}));
	}(e, i), s = Function("Vue", l)(ox);
	return s._rc = !0, uc[n] = s;
}
var e, t, n, r, i, l, s, o, a, c, u, d, p, f, g, m, y, _, b, S, x, C, k, T, w, N, A, E, R, I, O, P, M, F, D, L, $, V, B, j, U, H, q, W, K, z, J, X, Q, Z, en, er, ei, el, es, ec, eu, ed, ep, eh, ey, ev, e_, eE, eR, eM, eF, eD, eL, e$, eV, eB, eK, eJ, eY, e0, e2, e3, e6, e4, e8, e5, e9, e7, tn, tr, ti, tl, ts, to, ta, tc, tS, tx, tN, tI, tP, tD, tL, tV, tB, tj, tU, tH, tJ, tZ, tY, t0, t1, t2, t3, t6, nt, nn, nr, no, nf, ng, nC, nk, nT, nw, nN, nA, nR, nP, nM, nD, nL, n$, nB, nZ, n1, n2, n3, n6, n8, n5, n9, rt, rn, rr, ri, rl, rs, ro, ru, rd, r_, rb, rS, rx, rC, rk, rT, rw, rN, rA, rR, rO, rU, rH, rq, rW, rK, r9, ir, iu, id, ih, im, i_, ib, ik, iT, iA, iR, iI, iO, iP, iM, iF, iD, iW, iK, iz, iY, i0, i1, i2, i3, i6, i5, ll, ls, la, l_, lb, lx, lC, lk, lT, lN, lI, lP, lL, lU, lH, lW, lK, lz, lQ, lZ, lY, l0, l1, l2, l3, l6, l4, l8, l5, l9, l7, si, su, sd, sp, sf, sy, sv, sb, sS, sx, sw, sN, sA, sE, sR, sI, sO, sP, sF, sD, sL, sj, sU, sH, sq, sW, sX, sY, s0, s2, s3, s4, s8, oe, or, oi, ol, os, oo, oa, oc, od, op, oh, of, oy, ov, o_, ob, oS, ox, oC, ok, oT, ow, oN, oA, oE, oR, oI, oO, oP, oM, oF, oD, oL, o$, oV, oB, oj, oU, oH, oq, oW, oK, oz, oJ, oG, oX, oQ, oZ, oY, o0, o1, o2, o3, o6, o4, o8, o5, o9, o7, au, ad, am, ab, ax, aC, ak, aT, aw, aN, aA, aL, aU, aK, az, aJ, aG, aX, aQ, aZ, aY, a0, a1, a2, a3, a6, a4, a8, a5, cr, ci, cf, c_, cb, cN, cI, cM, cF, cL, c$, cU, cH, cq, cW, cK, cz, cJ, cG, cQ, cZ, cY, c0, c1, c2, c3, c6, c4, c8, c5, c9, c7, ue, ut, un, ur, ui, ul, us, uo, ua, uc;
var init_vue_esm_browser_prod = __esmMin((() => {
	f = {};
	g = [];
	m = () => {};
	y = () => !1;
	_ = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || 97 > e.charCodeAt(2));
	b = (e) => e.startsWith("onUpdate:");
	S = Object.assign;
	x = (e, t) => {
		let n = e.indexOf(t);
		n > -1 && e.splice(n, 1);
	};
	C = Object.prototype.hasOwnProperty;
	k = (e, t) => C.call(e, t);
	T = Array.isArray;
	w = (e) => "function" == typeof e;
	N = (e) => "string" == typeof e;
	A = (e) => "symbol" == typeof e;
	E = (e) => null !== e && "object" == typeof e;
	R = (e) => (E(e) || w(e)) && w(e.then) && w(e.catch);
	I = Object.prototype.toString;
	O = (e) => N(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e;
	P = h(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
	M = h("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
	F = (e) => {
		let t = Object.create(null);
		return (n) => t[n] || (t[n] = e(n));
	};
	D = /-\w/g;
	L = F((e) => e.replace(D, (e) => e.slice(1).toUpperCase()));
	$ = /\B([A-Z])/g;
	V = F((e) => e.replace($, "-$1").toLowerCase());
	B = F((e) => e.charAt(0).toUpperCase() + e.slice(1));
	j = F((e) => e ? `on${B(e)}` : "");
	U = (e, t) => !Object.is(e, t);
	H = (e, ...t) => {
		for (let n = 0; n < e.length; n++) e[n](...t);
	};
	q = (e, t, n, r = !1) => {
		Object.defineProperty(e, t, {
			configurable: !0,
			enumerable: !1,
			writable: r,
			value: n
		});
	};
	W = (e) => {
		let t = parseFloat(e);
		return isNaN(t) ? e : t;
	};
	K = (e) => {
		let t = N(e) ? Number(e) : NaN;
		return isNaN(t) ? e : t;
	};
	z = () => e || (e = "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : "u" > typeof window ? window : "u" > typeof global ? global : {});
	J = h("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
	X = /;(?![^(]*\))/g;
	Q = /:([^]+)/;
	Z = /\/\*[^]*?\*\//g;
	en = h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot");
	er = h("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
	ei = h("annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics");
	el = h("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
	es = h("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
	ec = (e) => !!(e && !0 === e.__v_isRef);
	eu = (e) => N(e) ? e : null == e ? "" : T(e) || E(e) && (e.toString === I || !w(e.toString)) ? ec(e) ? eu(e.value) : JSON.stringify(e, ed, 2) : String(e);
	ed = (e, t) => {
		let n;
		if (ec(t)) return ed(e, t.value);
		if ("[object Map]" === (n = t, I.call(n))) return { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[ep(t, r) + " =>"] = n, e), {}) };
		{
			let e;
			if ("[object Set]" === (e = t, I.call(e))) return { [`Set(${t.size})`]: [...t.values()].map((e) => ep(e)) };
			else {
				if (A(t)) return ep(t);
				let e;
				if (E(t) && !T(t) && "[object Object]" !== (e = t, I.call(e))) return String(t);
			}
		}
		return t;
	};
	ep = (e, t = "") => {
		var n;
		return A(e) ? `Symbol(${null != (n = e.description) ? n : t})` : e;
	};
	eh = class {
		constructor(e = !1) {
			this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && t && (t.active ? (this.parent = t, this.index = (t.scopes || (t.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
		}
		get active() {
			return this._active;
		}
		pause() {
			if (this._active) {
				let e, t;
				if (this._isPaused = !0, this.scopes) {
					let n = this.scopes.slice();
					for (e = 0, t = n.length; e < t; e++) n[e].pause();
				}
				for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
			}
		}
		resume() {
			if (this._active && this._isPaused) {
				let e, t;
				if (this._isPaused = !1, this.scopes) {
					let n = this.scopes.slice();
					for (e = 0, t = n.length; e < t; e++) n[e].resume();
				}
				let n = this.effects.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
		}
		run(e) {
			if (this._active) {
				let n = t;
				try {
					return t = this, e();
				} finally {
					t = n;
				}
			}
		}
		on() {
			1 == ++this._on && (this.prevScope = t, t = this);
		}
		off() {
			if (this._on > 0 && 0 == --this._on) {
				if (t === this) t = this.prevScope;
				else {
					let e = t;
					for (; e;) {
						if (e.prevScope === this) {
							e.prevScope = this.prevScope;
							break;
						}
						e = e.prevScope;
					}
				}
				this.prevScope = void 0;
			}
		}
		stop(e) {
			if (this._active) {
				let t, n;
				for (this._active = !1, t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
				for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
				if (this.cleanups.length = 0, this.scopes) {
					let e = this.scopes.slice();
					for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
					this.scopes.length = 0;
				}
				if (!this.detached && this.parent && !e) {
					let e = this.parent.scopes.pop();
					e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
				}
				this.parent = void 0;
			}
		}
	};
	ey = /* @__PURE__ */ new WeakSet();
	ev = class {
		constructor(e) {
			this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, t && (t.active ? t.effects.push(this) : this.flags &= -2);
		}
		pause() {
			this.flags |= 64;
		}
		resume() {
			64 & this.flags && (this.flags &= -65, ey.has(this) && (ey.delete(this), this.trigger()));
		}
		notify() {
			(!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || eb(this));
		}
		run() {
			if (!(1 & this.flags)) return this.fn();
			this.flags |= 2, eP(this), ex(this);
			let e = n, t = eE;
			n = this, eE = !0;
			try {
				return this.fn();
			} finally {
				eC(this), n = e, eE = t, this.flags &= -3;
			}
		}
		stop() {
			if (1 & this.flags) {
				for (let e = this.deps; e; e = e.nextDep) ew(e);
				this.deps = this.depsTail = void 0, eP(this), this.onStop && this.onStop(), this.flags &= -2;
			}
		}
		trigger() {
			64 & this.flags ? ey.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
		}
		runIfDirty() {
			ek(this) && this.run();
		}
		get dirty() {
			return ek(this);
		}
	};
	e_ = 0;
	eE = !0;
	eR = [];
	eM = 0;
	eF = class {
		constructor(e, t) {
			this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
		}
	};
	eD = class {
		constructor(e) {
			this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
		}
		track(e) {
			if (!n || !eE || n === this.computed) return;
			let t = this.activeLink;
			if (void 0 === t || t.sub !== n) t = this.activeLink = new eF(n, this), n.deps ? (t.prevDep = n.depsTail, n.depsTail.nextDep = t, n.depsTail = t) : n.deps = n.depsTail = t, function e(t) {
				if (t.dep.sc++, 4 & t.sub.flags) {
					let n = t.dep.computed;
					if (n && !t.dep.subs) {
						n.flags |= 20;
						for (let t = n.deps; t; t = t.nextDep) e(t);
					}
					let r = t.dep.subs;
					r !== t && (t.prevSub = r, r && (r.nextSub = t)), t.dep.subs = t;
				}
			}(t);
			else if (-1 === t.version && (t.version = this.version, t.nextDep)) {
				let e = t.nextDep;
				e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = n.depsTail, t.nextDep = void 0, n.depsTail.nextDep = t, n.depsTail = t, n.deps === t && (n.deps = e);
			}
			return t;
		}
		trigger(e) {
			this.version++, eM++, this.notify(e);
		}
		notify(e) {
			e_++;
			try {
				for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
			} finally {
				eS();
			}
		}
	};
	eL = /* @__PURE__ */ new WeakMap();
	e$ = Symbol("");
	eV = Symbol("");
	eB = Symbol("");
	eK = {
		__proto__: null,
		[Symbol.iterator]() {
			return ez(this, Symbol.iterator, (e) => eW(this, e));
		},
		concat(...e) {
			return eH(this).concat(...e.map((e) => T(e) ? eH(e) : e));
		},
		entries() {
			return ez(this, "entries", (e) => (e[1] = eW(this, e[1]), e));
		},
		every(e, t) {
			return eG(this, "every", e, t, void 0, arguments);
		},
		filter(e, t) {
			return eG(this, "filter", e, t, (e) => e.map((e) => eW(this, e)), arguments);
		},
		find(e, t) {
			return eG(this, "find", e, t, (e) => eW(this, e), arguments);
		},
		findIndex(e, t) {
			return eG(this, "findIndex", e, t, void 0, arguments);
		},
		findLast(e, t) {
			return eG(this, "findLast", e, t, (e) => eW(this, e), arguments);
		},
		findLastIndex(e, t) {
			return eG(this, "findLastIndex", e, t, void 0, arguments);
		},
		forEach(e, t) {
			return eG(this, "forEach", e, t, void 0, arguments);
		},
		includes(...e) {
			return eQ(this, "includes", e);
		},
		indexOf(...e) {
			return eQ(this, "indexOf", e);
		},
		join(e) {
			return eH(this).join(e);
		},
		lastIndexOf(...e) {
			return eQ(this, "lastIndexOf", e);
		},
		map(e, t) {
			return eG(this, "map", e, t, void 0, arguments);
		},
		pop() {
			return eZ(this, "pop");
		},
		push(...e) {
			return eZ(this, "push", e);
		},
		reduce(e, ...t) {
			return eX(this, "reduce", e, t);
		},
		reduceRight(e, ...t) {
			return eX(this, "reduceRight", e, t);
		},
		shift() {
			return eZ(this, "shift");
		},
		some(e, t) {
			return eG(this, "some", e, t, void 0, arguments);
		},
		splice(...e) {
			return eZ(this, "splice", e);
		},
		toReversed() {
			return eH(this).toReversed();
		},
		toSorted(e) {
			return eH(this).toSorted(e);
		},
		toSpliced(...e) {
			return eH(this).toSpliced(...e);
		},
		unshift(...e) {
			return eZ(this, "unshift", e);
		},
		values() {
			return ez(this, "values", (e) => eW(this, e));
		}
	};
	eJ = Array.prototype;
	eY = h("__proto__,__v_isRef,__isVue");
	e0 = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => "arguments" !== e && "caller" !== e).map((e) => Symbol[e]).filter(A));
	e2 = class {
		constructor(e = !1, t = !1) {
			this._isReadonly = e, this._isShallow = t;
		}
		get(e, t, n) {
			if ("__v_skip" === t) return e.__v_skip;
			let r = this._isReadonly, i = this._isShallow;
			if ("__v_isReactive" === t) return !r;
			if ("__v_isReadonly" === t) return r;
			if ("__v_isShallow" === t) return i;
			if ("__v_raw" === t) return n === (r ? i ? tc : ta : i ? to : ts).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
			let l = T(e);
			if (!r) {
				let e;
				if (l && (e = eK[t])) return e;
				if ("hasOwnProperty" === t) return e1;
			}
			let s = Reflect.get(e, t, tC(e) ? e : n);
			if ((A(t) ? e0.has(t) : eY(t)) || (r || ej(e, "get", t), i)) return s;
			if (tC(s)) {
				let e = l && O(t) ? s : s.value;
				return r && E(e) ? tp(e) : e;
			}
			return E(s) ? r ? tp(s) : tu(s) : s;
		}
	};
	e3 = class extends e2 {
		constructor(e = !1) {
			super(!1, e);
		}
		set(e, t, n, r) {
			let i = e[t], l = T(e) && O(t);
			if (!this._isShallow) {
				let e = tm(i);
				if (ty(n) || tm(n) || (i = t_(i), n = t_(n)), !l && tC(i) && !tC(n)) if (e) return !0;
				else return i.value = n, !0;
			}
			let s = l ? Number(t) < e.length : k(e, t), o = Reflect.set(e, t, n, tC(e) ? e : r);
			return e === t_(r) && o && (s ? U(n, i) && eU(e, "set", t, n) : eU(e, "add", t, n)), o;
		}
		deleteProperty(e, t) {
			let n = k(e, t);
			e[t];
			let r = Reflect.deleteProperty(e, t);
			return r && n && eU(e, "delete", t, void 0), r;
		}
		has(e, t) {
			let n = Reflect.has(e, t);
			return A(t) && e0.has(t) || ej(e, "has", t), n;
		}
		ownKeys(e) {
			return ej(e, "iterate", T(e) ? "length" : e$), Reflect.ownKeys(e);
		}
	};
	e6 = class extends e2 {
		constructor(e = !1) {
			super(!0, e);
		}
		set(e, t) {
			return !0;
		}
		deleteProperty(e, t) {
			return !0;
		}
	};
	e4 = new e3();
	e8 = new e6();
	e5 = new e3(!0);
	e9 = new e6(!0);
	e7 = (e) => e;
	tn = { get: tt(!1, !1) };
	tr = { get: tt(!1, !0) };
	ti = { get: tt(!0, !1) };
	tl = { get: tt(!0, !0) };
	ts = /* @__PURE__ */ new WeakMap();
	to = /* @__PURE__ */ new WeakMap();
	ta = /* @__PURE__ */ new WeakMap();
	tc = /* @__PURE__ */ new WeakMap();
	tS = (e) => E(e) ? tu(e) : e;
	tx = (e) => E(e) ? tp(e) : e;
	tN = class {
		constructor(e, t) {
			this.dep = new eD(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : t_(e), this._value = t ? e : tS(e), this.__v_isShallow = t;
		}
		get value() {
			return this.dep.track(), this._value;
		}
		set value(e) {
			let t = this._rawValue, n = this.__v_isShallow || ty(e) || tm(e);
			U(e = n ? e : t_(e), t) && (this._rawValue = e, this._value = n ? e : tS(e), this.dep.trigger());
		}
	};
	tI = {
		get: (e, t, n) => "__v_raw" === t ? e : tE(Reflect.get(e, t, n)),
		set: (e, t, n, r) => {
			let i = e[t];
			return tC(i) && !tC(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
		}
	};
	tP = class {
		constructor(e) {
			this.__v_isRef = !0, this._value = void 0;
			let t = this.dep = new eD(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
			this._get = n, this._set = r;
		}
		get value() {
			return this._value = this._get();
		}
		set value(e) {
			this._set(e);
		}
	};
	tD = class {
		constructor(e, t, n) {
			this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = A(t) ? t : String(t), this._raw = t_(e);
			let r = !0, i = e;
			if (!T(e) || A(this._key) || !O(this._key)) do
				r = !tv(i) || ty(i);
			while (r && (i = i.__v_raw));
			this._shallow = r;
		}
		get value() {
			let e = this._object[this._key];
			return this._shallow && (e = tE(e)), this._value = void 0 === e ? this._defaultValue : e;
		}
		set value(e) {
			if (this._shallow && tC(this._raw[this._key])) {
				let t = this._object[this._key];
				if (tC(t)) {
					t.value = e;
					return;
				}
			}
			this._object[this._key] = e;
		}
		get dep() {
			var e, t;
			let n;
			return e = this._raw, t = this._key, (n = eL.get(e)) && n.get(t);
		}
	};
	tL = class {
		constructor(e) {
			this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
		}
		get value() {
			return this._value = this._getter();
		}
	};
	tV = class {
		constructor(e, t, n) {
			this.fn = e, this.setter = t, this._value = void 0, this.dep = new eD(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = eM - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
		}
		notify() {
			if (this.flags |= 16, !(8 & this.flags) && n !== this) return eb(this, !0), !0;
		}
		get value() {
			let e = this.dep.track();
			return eT(this), e && (e.version = this.dep.version), this._value;
		}
		set value(e) {
			this.setter && this.setter(e);
		}
	};
	tB = {
		GET: "get",
		HAS: "has",
		ITERATE: "iterate"
	};
	tj = {
		SET: "set",
		ADD: "add",
		DELETE: "delete",
		CLEAR: "clear"
	};
	tU = {};
	tH = /* @__PURE__ */ new WeakMap();
	tJ = {
		SETUP_FUNCTION: 0,
		0: "SETUP_FUNCTION",
		RENDER_FUNCTION: 1,
		1: "RENDER_FUNCTION",
		NATIVE_EVENT_HANDLER: 5,
		5: "NATIVE_EVENT_HANDLER",
		COMPONENT_EVENT_HANDLER: 6,
		6: "COMPONENT_EVENT_HANDLER",
		VNODE_HOOK: 7,
		7: "VNODE_HOOK",
		DIRECTIVE_HOOK: 8,
		8: "DIRECTIVE_HOOK",
		TRANSITION_HOOK: 9,
		9: "TRANSITION_HOOK",
		APP_ERROR_HANDLER: 10,
		10: "APP_ERROR_HANDLER",
		APP_WARN_HANDLER: 11,
		11: "APP_WARN_HANDLER",
		FUNCTION_REF: 12,
		12: "FUNCTION_REF",
		ASYNC_COMPONENT_LOADER: 13,
		13: "ASYNC_COMPONENT_LOADER",
		SCHEDULER: 14,
		14: "SCHEDULER",
		COMPONENT_UPDATE: 15,
		15: "COMPONENT_UPDATE",
		APP_UNMOUNT_CLEANUP: 16,
		16: "APP_UNMOUNT_CLEANUP"
	};
	tZ = [];
	tY = -1;
	t0 = [];
	t1 = null;
	t2 = 0;
	t3 = Promise.resolve();
	t6 = null;
	nt = (e) => null == e.id ? 2 & e.flags ? -1 : 1 / 0 : e.id;
	nn = null;
	nr = null;
	no = (e) => na;
	nf = Symbol.for("v-scx");
	ng = () => np(nf);
	nC = /* @__PURE__ */ new WeakMap();
	nk = Symbol("_vte");
	nT = (e) => e && (e.disabled || "" === e.disabled);
	nw = (e) => "u" > typeof SVGElement && e instanceof SVGElement;
	nN = (e) => "function" == typeof MathMLElement && e instanceof MathMLElement;
	nA = (e, t) => {
		let n = e && e.to;
		return N(n) ? t ? t(n) : null : n;
	};
	nR = {
		name: "Teleport",
		__isTeleport: !0,
		process(e, t, n, r, i, l, s, o, a, c) {
			let { mc: u, pc: d, pbc: p, o: { insert: h, querySelector: f, createText: g, parentNode: m } } = c, y = nT(t.props), { dynamicChildren: _ } = t, b = (e, t, n) => {
				16 & e.shapeFlag && u(e.children, t, n, i, l, s, o, a);
			}, S = (e = t) => {
				let n = nT(e.props), r = e.target = nA(e.props, f), l = nO(r, e, g, h);
				r && ("svg" !== s && nw(r) ? s = "svg" : "mathml" !== s && nN(r) && (s = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, l), nI(e, !1)));
			}, x = (e) => {
				let t = () => {
					if (nC.get(e) === t) {
						if (nC.delete(e), nT(e.props)) {
							let t = m(e.el) || n;
							b(e, t, e.anchor), nI(e, !0);
						}
						S(e);
					}
				};
				nC.set(e, t), iD(t, l);
			};
			if (null == e) {
				let e, i = t.el = g(""), s = t.anchor = g("");
				if (h(i, n, r), h(s, n, r), (e = t.props) && (e.defer || "" === e.defer) || l && l.pendingBranch) return void x(t);
				y && (b(t, n, s), nI(t, !0)), S();
			} else {
				t.el = e.el;
				let r = t.anchor = e.anchor, u = nC.get(e);
				if (u) {
					u.flags |= 8, nC.delete(e), x(t);
					return;
				}
				t.targetStart = e.targetStart;
				let h = t.target = e.target, g = t.targetAnchor = e.targetAnchor, m = nT(e.props), b = m ? n : h, S = m ? r : g;
				if ("svg" === s || nw(h) ? s = "svg" : ("mathml" === s || nN(h)) && (s = "mathml"), _ ? (p(e.dynamicChildren, _, b, i, l, s, o), iH(e, t, !0)) : a || d(e, t, b, S, i, l, s, o, !1), y) m ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : nE(t, n, r, c, 1);
				else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
					let e = nA(t.props, f);
					e && (t.target = e, nE(t, e, null, c, 0));
				} else m && nE(t, h, g, c, 1);
				nI(t, y);
			}
		},
		remove(e, t, n, { um: r, o: { remove: i } }, l) {
			let { shapeFlag: s, children: o, anchor: a, targetStart: c, targetAnchor: u, target: d, props: p } = e, h = nT(p), f = l || !h, g = nC.get(e);
			if (g && (g.flags |= 8, nC.delete(e)), d && (i(c), i(u)), l && i(a), !g && (h || d) && 16 & s) for (let e = 0; e < o.length; e++) {
				let i = o[e];
				r(i, t, n, f, !!i.dynamicChildren);
			}
		},
		move: nE,
		hydrate: function(e, t, n, r, i, l, { o: { nextSibling: s, parentNode: o, querySelector: a, insert: c, createText: u } }, d) {
			function p(e, n) {
				let r = n;
				for (; r;) {
					if (r && 8 === r.nodeType) {
						if ("teleport start anchor" === r.data) t.targetStart = r;
						else if ("teleport anchor" === r.data) {
							t.targetAnchor = r, e._lpa = t.targetAnchor && s(t.targetAnchor);
							break;
						}
					}
					r = s(r);
				}
			}
			function h(e, t) {
				t.anchor = d(s(e), t, o(e), n, r, i, l);
			}
			let f = t.target = nA(t.props, a), g = nT(t.props);
			if (f) {
				let a = f._lpa || f.firstChild;
				16 & t.shapeFlag && (g ? (h(e, t), p(f, a), t.targetAnchor || nO(f, t, u, c, o(e) === f ? e : null)) : (t.anchor = s(e), p(f, a), t.targetAnchor || nO(f, t, u, c), d(a && s(a), t, f, n, r, i, l))), nI(t, g);
			} else g && 16 & t.shapeFlag && (h(e, t), t.targetStart = e, t.targetAnchor = s(e));
			return t.anchor && s(t.anchor);
		}
	};
	nP = Symbol("_leaveCb");
	nM = Symbol("_enterCb");
	nD = [Function, Array];
	nL = {
		mode: String,
		appear: Boolean,
		persisted: Boolean,
		onBeforeEnter: nD,
		onEnter: nD,
		onAfterEnter: nD,
		onEnterCancelled: nD,
		onBeforeLeave: nD,
		onLeave: nD,
		onAfterLeave: nD,
		onLeaveCancelled: nD,
		onBeforeAppear: nD,
		onAppear: nD,
		onAfterAppear: nD,
		onAppearCancelled: nD
	};
	n$ = (e) => {
		let t = e.subTree;
		return t.component ? n$(t.component) : t;
	};
	nB = {
		name: "BaseTransition",
		props: nL,
		setup(e, { slots: t }) {
			let n = lC(), r = nF();
			return () => {
				let i = t.default && nK(t.default(), !0), l = i && i.length ? nV(i) : n.subTree ? lh() : void 0;
				if (!l) return;
				let s = t_(e), { mode: o } = s;
				if (r.isLeaving) return nH(l);
				let a = nq(l);
				if (!a) return nH(l);
				let c = nU(a, s, r, n, (e) => c = e);
				a.type !== i1 && nW(a, c);
				let u = n.subTree && nq(n.subTree);
				if (u && u.type !== i1 && !lr(u, a) && n$(n).type !== i1) {
					let e = nU(u, s, r, n);
					if (nW(u, e), "out-in" === o && a.type !== i1) return r.isLeaving = !0, e.afterLeave = () => {
						r.isLeaving = !1, 8 & n.job.flags || n.update(), delete e.afterLeave, u = void 0;
					}, nH(l);
					"in-out" === o && a.type !== i1 ? e.delayLeave = (e, t, n) => {
						nj(r, u)[String(u.key)] = u, e[nP] = () => {
							t(), e[nP] = void 0, delete c.delayedLeave, u = void 0;
						}, c.delayedLeave = () => {
							n(), delete c.delayedLeave, u = void 0;
						};
					} : u = void 0;
				} else u && (u = void 0);
				return l;
			};
		}
	};
	nZ = /* @__PURE__ */ new WeakMap();
	n1 = !1;
	n2 = () => {
		n1 || (console.error("Hydration completed but contains mismatches."), n1 = !0);
	};
	n3 = (e) => {
		if (1 === e.nodeType) {
			if (e.namespaceURI.includes("svg") && "foreignObject" !== e.tagName) return "svg";
			if (e.namespaceURI.includes("MathML")) return "mathml";
		}
	};
	n6 = (e) => 8 === e.nodeType;
	n8 = /* @__PURE__ */ new Set([
		"src",
		"srcset",
		"href",
		"poster"
	]);
	n5 = "data-allow-mismatch";
	n9 = {
		0: "text",
		1: "children",
		2: "class",
		3: "style",
		4: "attribute"
	};
	rt = z().requestIdleCallback || ((e) => setTimeout(e, 1));
	rn = z().cancelIdleCallback || ((e) => clearTimeout(e));
	rr = (e = 1e4) => (t) => {
		let n = rt(t, { timeout: e });
		return () => rn(n);
	};
	ri = (e) => (t, n) => {
		let r = new IntersectionObserver((e) => {
			for (let n of e) if (n.isIntersecting) {
				r.disconnect(), t();
				break;
			}
		}, e);
		return n((e) => {
			if (e instanceof Element) {
				if (function(e) {
					let { top: t, left: n, bottom: r, right: i } = e.getBoundingClientRect(), { innerHeight: l, innerWidth: s } = window;
					return (t > 0 && t < l || r > 0 && r < l) && (n > 0 && n < s || i > 0 && i < s);
				}(e)) return t(), r.disconnect(), !1;
				r.observe(e);
			}
		}), () => r.disconnect();
	};
	rl = (e) => (t) => {
		if (e) {
			let n = matchMedia(e);
			if (!n.matches) return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
			t();
		}
	};
	rs = (e = []) => (t, n) => {
		N(e) && (e = [e]);
		let r = !1, i = (e) => {
			r || (r = !0, l(), t(), e.target.dispatchEvent(new e.constructor(e.type, e)));
		}, l = () => {
			n((t) => {
				for (let n of e) t.removeEventListener(n, i);
			});
		};
		return n((t) => {
			for (let n of e) t.addEventListener(n, i, { once: !0 });
		}), l;
	};
	ro = (e) => !!e.type.__asyncLoader;
	ru = (e) => e.type.__isKeepAlive;
	rd = {
		name: "KeepAlive",
		__isKeepAlive: !0,
		props: {
			include: [
				String,
				RegExp,
				Array
			],
			exclude: [
				String,
				RegExp,
				Array
			],
			max: [String, Number]
		},
		setup(e, { slots: t }) {
			let n = lC(), r = n.ctx;
			if (!r.renderer) return () => {
				let e = t.default && t.default();
				return e && 1 === e.length ? e[0] : e;
			};
			let i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set(), s = null, o = n.suspense, { renderer: { p: a, m: c, um: u, o: { createElement: d } } } = r, p = d("div");
			function h(e) {
				rm(e), u(e, n, o, !0);
			}
			function f(e) {
				i.forEach((t, n) => {
					let r = lD(ro(t) ? t.type.__asyncResolved || {} : t.type);
					r && !e(r) && g(n);
				});
			}
			function g(e) {
				let t = i.get(e);
				!t || s && lr(t, s) ? s && rm(s) : h(t), i.delete(e), l.delete(e);
			}
			r.activate = (e, t, n, r, i) => {
				let l = e.component;
				c(e, t, n, 0, o), a(l.vnode, e, t, n, l, o, r, e.slotScopeIds, i), iD(() => {
					l.isDeactivated = !1, l.a && H(l.a);
					let t = e.props && e.props.onVnodeMounted;
					t && lv(t, l.parent, e);
				}, o);
			}, r.deactivate = (e) => {
				let t = e.component;
				iq(t.m), iq(t.a), c(e, p, null, 1, o), iD(() => {
					t.da && H(t.da);
					let n = e.props && e.props.onVnodeUnmounted;
					n && lv(n, t.parent, e), t.isDeactivated = !0;
				}, o);
			}, n_(() => [e.include, e.exclude], ([e, t]) => {
				e && f((t) => rp(e, t)), t && f((e) => !rp(t, e));
			}, {
				flush: "post",
				deep: !0
			});
			let m = null, y = () => {
				null != m && (iW(n.subTree.type) ? iD(() => {
					i.set(m, ry(n.subTree));
				}, n.subTree.suspense) : i.set(m, ry(n.subTree)));
			};
			return rS(y), rC(y), rk(() => {
				i.forEach((e) => {
					let { subTree: t, suspense: r } = n, i = ry(t);
					if (e.type === i.type && e.key === i.key) {
						rm(i);
						let e = i.component.da;
						e && iD(e, r);
						return;
					}
					h(e);
				});
			}), () => {
				if (m = null, !t.default) return s = null;
				let n = t.default(), r = n[0];
				if (n.length > 1) return s = null, n;
				if (!ln(r) || !(4 & r.shapeFlag) && !(128 & r.shapeFlag)) return s = null, r;
				let o = ry(r);
				if (o.type === i1) return s = null, o;
				let a = o.type, c = lD(ro(o) ? o.type.__asyncResolved || {} : a), { include: u, exclude: d, max: p } = e;
				if (u && (!c || !rp(u, c)) || d && c && rp(d, c)) return o.shapeFlag &= -257, s = o, r;
				let h = null == o.key ? a : o.key, f = i.get(h);
				return o.el && (o = lu(o), 128 & r.shapeFlag && (r.ssContent = o)), m = h, f ? (o.el = f.el, o.component = f.component, o.transition && nW(o, o.transition), o.shapeFlag |= 512, l.delete(h), l.add(h)) : (l.add(h), p && l.size > parseInt(p, 10) && g(l.values().next().value)), o.shapeFlag |= 256, s = o, iW(r.type) ? r : o;
			};
		}
	};
	r_ = (e) => (t, n = lx) => {
		lN && "sp" !== e || rv(e, (...e) => t(...e), n);
	};
	rb = r_("bm");
	rS = r_("m");
	rx = r_("bu");
	rC = r_("u");
	rk = r_("bum");
	rT = r_("um");
	rw = r_("sp");
	rN = r_("rtg");
	rA = r_("rtc");
	rR = "components";
	rO = Symbol.for("v-ndc");
	rU = (e) => e ? lw(e) ? lF(e) : rU(e.parent) : null;
	rH = S(Object.create(null), {
		$: (e) => e,
		$el: (e) => e.vnode.el,
		$data: (e) => e.data,
		$props: (e) => e.props,
		$attrs: (e) => e.attrs,
		$slots: (e) => e.slots,
		$refs: (e) => e.refs,
		$parent: (e) => rU(e.parent),
		$root: (e) => rU(e.root),
		$host: (e) => e.ce,
		$emit: (e) => e.emit,
		$options: (e) => ie(e),
		$forceUpdate: (e) => e.f || (e.f = () => {
			t8(e.update);
		}),
		$nextTick: (e) => e.n || (e.n = t4.bind(e.proxy)),
		$watch: (e) => nS.bind(e)
	});
	rq = (e, t) => e !== f && !e.__isScriptSetup && k(e, t);
	rW = {
		get({ _: e }, t) {
			let n, r;
			if ("__v_skip" === t) return !0;
			let { ctx: i, setupState: l, data: s, props: o, accessCache: a, type: c, appContext: u } = e;
			if ("$" !== t[0]) {
				let e = a[t];
				if (void 0 !== e) switch (e) {
					case 1: return l[t];
					case 2: return s[t];
					case 4: return i[t];
					case 3: return o[t];
				}
				else {
					if (rq(l, t)) return a[t] = 1, l[t];
					if (s !== f && k(s, t)) return a[t] = 2, s[t];
					if (k(o, t)) return a[t] = 3, o[t];
					if (i !== f && k(i, t)) return a[t] = 4, i[t];
					r9 && (a[t] = 0);
				}
			}
			let d = rH[t];
			return d ? ("$attrs" === t && ej(e.attrs, "get", ""), d(e)) : (n = c.__cssModules) && (n = n[t]) ? n : i !== f && k(i, t) ? (a[t] = 4, i[t]) : k(r = u.config.globalProperties, t) ? r[t] : void 0;
		},
		set({ _: e }, t, n) {
			let { data: r, setupState: i, ctx: l } = e;
			return rq(i, t) ? (i[t] = n, !0) : r !== f && k(r, t) ? (r[t] = n, !0) : !k(e.props, t) && !("$" === t[0] && t.slice(1) in e) && (l[t] = n, !0);
		},
		has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: l, type: s } }, o) {
			let a;
			return !!(n[o] || e !== f && "$" !== o[0] && k(e, o) || rq(t, o) || k(l, o) || k(r, o) || k(rH, o) || k(i.config.globalProperties, o) || (a = s.__cssModules) && a[o]);
		},
		defineProperty(e, t, n) {
			return null != n.get ? e._.accessCache[t] = 0 : k(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
		}
	};
	rK = S({}, rW, {
		get(e, t) {
			if (t !== Symbol.unscopables) return rW.get(e, t, e);
		},
		has: (e, t) => "_" !== t[0] && !J(t)
	});
	r9 = !0;
	ir = {
		data: ii,
		props: ia,
		emits: ia,
		methods: io,
		computed: io,
		beforeCreate: is,
		created: is,
		beforeMount: is,
		mounted: is,
		beforeUpdate: is,
		updated: is,
		beforeDestroy: is,
		beforeUnmount: is,
		destroyed: is,
		unmounted: is,
		activated: is,
		deactivated: is,
		errorCaptured: is,
		serverPrefetch: is,
		components: io,
		directives: io,
		watch: function(e, t) {
			if (!e) return t;
			if (!t) return e;
			let n = S(Object.create(null), e);
			for (let r in t) n[r] = is(e[r], t[r]);
			return n;
		},
		provide: ii,
		inject: function(e, t) {
			return io(il(e), il(t));
		}
	};
	iu = 0;
	id = null;
	ih = (e, t) => "modelValue" === t || "model-value" === t ? e.modelModifiers : e[`${t}Modifiers`] || e[`${L(t)}Modifiers`] || e[`${V(t)}Modifiers`];
	im = /* @__PURE__ */ new WeakMap();
	i_ = (e) => {
		let t;
		for (let n in e) ("class" === n || "style" === n || _(n)) && ((t || (t = {}))[n] = e[n]);
		return t;
	};
	ib = (e, t) => {
		let n = {};
		for (let r in e) b(r) && r.slice(9) in t || (n[r] = e[r]);
		return n;
	};
	ik = {};
	iT = (e) => Object.getPrototypeOf(e) === ik;
	iA = /* @__PURE__ */ new WeakMap();
	iR = (e) => "_" === e || "_ctx" === e || "$stable" === e;
	iI = (e) => T(e) ? e.map(lf) : [lf(e)];
	iO = (e, t, n) => {
		if (t._n) return t;
		let r = na((...e) => iI(t(...e)), n);
		return r._c = !1, r;
	};
	iP = (e, t, n) => {
		let r = e._ctx;
		for (let n in e) {
			if (iR(n)) continue;
			let i = e[n];
			if (w(i)) t[n] = iO(n, i, r);
			else if (null != i) {
				let e = iI(i);
				t[n] = () => e;
			}
		}
	};
	iM = (e, t) => {
		let n = iI(t);
		e.slots.default = () => n;
	};
	iF = (e, t, n) => {
		for (let r in t) (n || !iR(r)) && (e[r] = t[r]);
	};
	iD = iQ;
	iW = (e) => e.__isSuspense;
	iK = 0;
	iz = {
		name: "Suspense",
		__isSuspense: !0,
		process(e, t, n, r, i, l, s, o, a, c) {
			if (null == e) (function(e, t, n, r, i, l, s, o, a) {
				let { p: c, o: { createElement: u } } = a, d = u("div"), p = e.suspense = iG(e, i, r, t, d, n, l, s, o, a);
				c(null, p.pendingBranch = e.ssContent, d, null, r, p, l, s), p.deps > 0 ? (iJ(e, "onPending"), iJ(e, "onFallback"), c(null, e.ssFallback, t, n, r, null, l, s), iZ(p, e.ssFallback)) : p.resolve(!1, !0);
			})(t, n, r, i, l, s, o, a, c);
			else {
				if (l && l.deps > 0 && !e.suspense.isInFallback) {
					t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
					return;
				}
				(function(e, t, n, r, i, l, s, o, { p: a, um: c, o: { createElement: u } }) {
					let d = t.suspense = e.suspense;
					d.vnode = t, t.el = e.el;
					let p = t.ssContent, h = t.ssFallback, { activeBranch: f, pendingBranch: g, isInFallback: m, isHydrating: y } = d;
					if (g) d.pendingBranch = p, lr(g, p) ? (a(g, p, d.hiddenContainer, null, i, d, l, s, o), d.deps <= 0 ? d.resolve() : m && !y && (a(f, h, n, r, i, null, l, s, o), iZ(d, h))) : (d.pendingId = iK++, y ? (d.isHydrating = !1, d.activeBranch = g) : c(g, i, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = u("div"), m ? (a(null, p, d.hiddenContainer, null, i, d, l, s, o), d.deps <= 0 ? d.resolve() : (a(f, h, n, r, i, null, l, s, o), iZ(d, h))) : f && lr(f, p) ? (a(f, p, n, r, i, d, l, s, o), d.resolve(!0)) : (a(null, p, d.hiddenContainer, null, i, d, l, s, o), d.deps <= 0 && d.resolve()));
					else if (f && lr(f, p)) a(f, p, n, r, i, d, l, s, o), iZ(d, p);
					else if (iJ(t, "onPending"), d.pendingBranch = p, 512 & p.shapeFlag ? d.pendingId = p.component.suspenseId : d.pendingId = iK++, a(null, p, d.hiddenContainer, null, i, d, l, s, o), d.deps <= 0) d.resolve();
					else {
						let { timeout: e, pendingId: t } = d;
						e > 0 ? setTimeout(() => {
							d.pendingId === t && d.fallback(h);
						}, e) : 0 === e && d.fallback(h);
					}
				})(e, t, n, r, i, s, o, a, c);
			}
		},
		hydrate: function(e, t, n, r, i, l, s, o, a) {
			let c = t.suspense = iG(t, r, n, e.parentNode, document.createElement("div"), null, i, l, s, o, !0), u = a(e, c.pendingBranch = t.ssContent, n, c, l, s);
			return 0 === c.deps && c.resolve(!1, !0), u;
		},
		normalize: function(e) {
			let { shapeFlag: t, children: n } = e, r = 32 & t;
			e.ssContent = iX(r ? n.default : n), e.ssFallback = r ? iX(n.fallback) : la(i1);
		}
	};
	iY = Symbol.for("v-fgt");
	i0 = Symbol.for("v-txt");
	i1 = Symbol.for("v-cmt");
	i2 = Symbol.for("v-stc");
	i3 = [];
	i6 = null;
	i5 = 1;
	ll = ({ key: e }) => null != e ? e : null;
	ls = ({ ref: e, ref_key: t, ref_for: n }) => ("number" == typeof e && (e = "" + e), null != e ? N(e) || tC(e) || w(e) ? {
		i: nn,
		r: e,
		k: t,
		f: !!n
	} : e : null);
	la = function(e, t = null, n = null, r = 0, i = null, l = !1) {
		var s;
		if (e && e !== rO || (e = i1), ln(e)) {
			let r = lu(e, t, !0);
			return n && lm(r, n), i5 > 0 && !l && i6 && (6 & r.shapeFlag ? i6[i6.indexOf(e)] = r : i6.push(r)), r.patchFlag = -2, r;
		}
		if (w(s = e) && "__vccOpts" in s && (e = e.__vccOpts), t) {
			let { class: e, style: n } = t = lc(t);
			e && !N(e) && (t.class = ee(e)), E(n) && (tv(n) && !T(n) && (n = S({}, n)), t.style = G(n));
		}
		let o = N(e) ? 1 : iW(e) ? 128 : e.__isTeleport ? 64 : E(e) ? 4 : 2 * !!w(e);
		return lo(e, t, n, r, i, o, l, !0);
	};
	l_ = ic();
	lb = 0;
	lx = null;
	lC = () => lx || nn;
	{
		let e = z(), t = (t, n) => {
			let r;
			return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
				r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
			};
		};
		l = t("__VUE_INSTANCE_SETTERS__", (e) => lx = e), s = t("__VUE_SSR_SETTERS__", (e) => lN = e);
	}
	lk = (e) => {
		let t = lx;
		return l(e), e.scope.on(), () => {
			e.scope.off(), l(t);
		};
	};
	lT = () => {
		lx && lx.scope.off(), l(null);
	};
	lN = !1;
	lI = () => !o;
	lP = { get: (e, t) => (ej(e, "get", ""), e[t]) };
	lL = (e, t) => (function(e, t = !1) {
		let n, r;
		return w(e) ? n = e : (n = e.get, r = e.set), new tV(n, r, t);
	})(e, lN);
	lU = "3.5.41";
	lH = m;
	lK = m;
	lz = {
		createComponentInstance: lS,
		setupComponent: lA,
		renderComponentRoot: iv,
		setCurrentRenderingInstance: ni,
		isVNode: ln,
		normalizeVNode: lf,
		getComponentPublicInstance: lF,
		ensureValidVNode: rB,
		pushWarningContext: function(e) {},
		popWarningContext: function() {}
	};
	lQ = "u" > typeof window && window.trustedTypes;
	if (lQ) try {
		p = lQ.createPolicy("vue", { createHTML: (e) => e });
	} catch (e) {}
	lZ = p ? (e) => p.createHTML(e) : (e) => e;
	lY = "u" > typeof document ? document : null;
	l0 = lY && lY.createElement("template");
	l1 = {
		insert: (e, t, n) => {
			t.insertBefore(e, n || null);
		},
		remove: (e) => {
			let t = e.parentNode;
			t && t.removeChild(e);
		},
		createElement: (e, t, n, r) => {
			let i = "svg" === t ? lY.createElementNS("http://www.w3.org/2000/svg", e) : "mathml" === t ? lY.createElementNS("http://www.w3.org/1998/Math/MathML", e) : n ? lY.createElement(e, { is: n }) : lY.createElement(e);
			return "select" === e && r && null != r.multiple && i.setAttribute("multiple", r.multiple), i;
		},
		createText: (e) => lY.createTextNode(e),
		createComment: (e) => lY.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t;
		},
		setElementText: (e, t) => {
			e.textContent = t;
		},
		parentNode: (e) => e.parentNode,
		nextSibling: (e) => e.nextSibling,
		querySelector: (e) => lY.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, "");
		},
		insertStaticContent(e, t, n, r, i, l) {
			let s = n ? n.previousSibling : t.lastChild;
			if (i && (i === l || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== l && (i = i.nextSibling););
			else {
				l0.innerHTML = lZ("svg" === r ? `<svg>${e}</svg>` : "mathml" === r ? `<math>${e}</math>` : e);
				let i = l0.content;
				if ("svg" === r || "mathml" === r) {
					let e = i.firstChild;
					for (; e.firstChild;) i.appendChild(e.firstChild);
					i.removeChild(e);
				}
				t.insertBefore(i, n);
			}
			return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
		}
	};
	l2 = "transition";
	l3 = "animation";
	l6 = Symbol("_vtc");
	l4 = {
		name: String,
		type: String,
		css: {
			type: Boolean,
			default: !0
		},
		duration: [
			String,
			Number,
			Object
		],
		enterFromClass: String,
		enterActiveClass: String,
		enterToClass: String,
		appearFromClass: String,
		appearActiveClass: String,
		appearToClass: String,
		leaveFromClass: String,
		leaveActiveClass: String,
		leaveToClass: String
	};
	l8 = S({}, nL, l4);
	l5 = ((o_ = (e, { slots: t }) => l$(nB, se(e), t)).displayName = "Transition", o_.props = l8, o_);
	l9 = (e, t = []) => {
		T(e) ? e.forEach((e) => e(...t)) : e && e(...t);
	};
	l7 = (e) => !!e && (T(e) ? e.some((e) => e.length > 1) : e.length > 1);
	si = 0;
	su = Symbol("_vod");
	sd = Symbol("_vsh");
	sp = {
		name: "show",
		beforeMount(e, { value: t }, { transition: n }) {
			e[su] = "none" === e.style.display ? "" : e.style.display, n && t ? n.beforeEnter(e) : sh(e, t);
		},
		mounted(e, { value: t }, { transition: n }) {
			n && t && n.enter(e);
		},
		updated(e, { value: t, oldValue: n }, { transition: r }) {
			!t != !n && (r ? t ? (r.beforeEnter(e), sh(e, !0), r.enter(e)) : r.leave(e, () => {
				sh(e, !1);
			}) : sh(e, t));
		},
		beforeUnmount(e, { value: t }) {
			sh(e, t);
		}
	};
	sf = Symbol("");
	sy = /(?:^|;)\s*display\s*:/;
	sv = /\s*!important$/;
	sb = [
		"Webkit",
		"Moz",
		"ms"
	];
	sS = {};
	sx = "http://www.w3.org/1999/xlink";
	sw = Symbol("_vei");
	sN = /(Once|Passive|Capture)$/;
	sA = /^on:?(?:Once|Passive|Capture)$/;
	sE = 0;
	sR = Promise.resolve();
	sI = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && 123 > e.charCodeAt(2);
	sO = (e, t, n, r, i, l) => {
		let s = "svg" === i;
		if ("class" === t) {
			var o;
			let t;
			o = r, (t = e[l6]) && (o = (o ? [o, ...t] : [...t]).join(" ")), null == o ? e.removeAttribute("class") : s ? e.setAttribute("class", o) : e.className = o;
		} else "style" === t ? function(e, t, n) {
			let r = e.style, i = N(n), l = !1;
			if (n && !i) {
				if (t) if (N(t)) for (let e of t.split(";")) {
					let t = e.slice(0, e.indexOf(":")).trim();
					n[t] ?? s_(r, t, "");
				}
				else for (let e in t) n[e] ?? s_(r, e, "");
				for (let i in n) {
					var s, o, a, c;
					"display" === i && (l = !0);
					let u = n[i];
					null != u ? (s = e, o = i, a = !N(t) && t ? t[i] : void 0, c = u, "TEXTAREA" === s.tagName && ("width" === o || "height" === o) && N(c) && a === c || s_(r, i, u)) : s_(r, i, "");
				}
			} else if (i) {
				if (t !== n) {
					let e = r[sf];
					e && (n += ";" + e), r.cssText = n, l = sy.test(n);
				}
			} else t && e.removeAttribute("style");
			su in e && (e[su] = l ? r.display : "", e[sd] && (r.display = "none"));
		}(e, n, r) : _(t) ? b(t) || function(e, t, n, r = null) {
			let i = e[sw] || (e[sw] = {}), l = i[t];
			if (n && l) l.value = n;
			else {
				let [a, c] = function(e) {
					let t, n;
					for (; (n = e.match(sN)) && !sA.test(e);) t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
					return [":" === e[2] ? e.slice(3) : V(e.slice(2)), t];
				}(t);
				if (n) {
					var s, o;
					let l;
					sT(e, a, i[t] = (s = n, o = r, (l = (e) => {
						if (e._vts) {
							if (e._vts <= l.attached) return;
						} else e._vts = Date.now();
						let t = l.value;
						if (T(t)) {
							let n = e.stopImmediatePropagation;
							e.stopImmediatePropagation = () => {
								n.call(e), e._stopped = !0;
							};
							let r = t.slice(), i = [e];
							for (let t = 0; t < r.length && !e._stopped; t++) {
								let e = r[t];
								e && tX(e, o, 5, i);
							}
						} else tX(t, o, 5, [e]);
					}).value = s, l.attached = sE || (sR.then(() => sE = 0), sE = Date.now()), l), c);
				} else l && (e.removeEventListener(a, l, c), i[t] = void 0);
			}
		}(e, t, r, l) : ("." === t[0] ? (t = t.slice(1), 0) : "^" === t[0] ? (t = t.slice(1), 1) : !function(e, t, n, r) {
			if (r) return !!("innerHTML" === t || "textContent" === t || t in e && sI(t) && w(n));
			if ("spellcheck" === t || "draggable" === t || "translate" === t || "autocorrect" === t || "sandbox" === t && "IFRAME" === e.tagName || "form" === t || "list" === t && "INPUT" === e.tagName || "type" === t && "TEXTAREA" === e.tagName) return !1;
			if ("width" === t || "height" === t) {
				let t = e.tagName;
				if ("IMG" === t || "VIDEO" === t || "CANVAS" === t || "SOURCE" === t) return !1;
			}
			return !(sI(t) && N(n)) && t in e;
		}(e, t, r, s)) ? e._isVueCE && (function(e, t) {
			let n = e._def.props;
			if (!n) return !1;
			let r = L(t);
			return Array.isArray(n) ? n.some((e) => L(e) === r) : Object.keys(n).some((e) => L(e) === r);
		}(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !N(r))) ? sk(e, L(t), r, l, t) : ("true-value" === t ? e._trueValue = r : "false-value" === t && (e._falseValue = r), sC(e, t, r, s)) : (sk(e, t, r), e.tagName.includes("-") || "value" !== t && "checked" !== t && "selected" !== t || sC(e, t, r, s, l, "value" !== t));
	};
	sP = {};
	sF = (e, t) => sM(e, t, of);
	sD = "u" > typeof HTMLElement ? HTMLElement : class {};
	sL = class sL extends sD {
		constructor(e, t = {}, n = oh) {
			super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== oh ? this._root = this.shadowRoot : !1 !== e.shadowRoot ? (this.attachShadow(S({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot) : this._root = this;
		}
		connectedCallback() {
			if (!this.isConnected) return;
			this.shadowRoot || this._resolved || this._parseSlots(), this._connected = !0;
			let e = this;
			for (; e = e && (e.assignedSlot || e.parentNode || e.host);) if (e instanceof sL) {
				this._parent = e;
				break;
			}
			this._instance || (this._resolved ? this._mount(this._def) : e && e._pendingResolve ? this._pendingResolve = e._pendingResolve.then(() => {
				if (this._pendingResolve = void 0, this.isConnected) return this._resolveDef();
			}) : this._resolveDef());
		}
		_setParent(e = this._parent) {
			e && (this._instance.parent = e._instance, this._inheritParentContext(e));
		}
		_inheritParentContext(e = this._parent) {
			e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
		}
		disconnectedCallback() {
			this._connected = !1, t4(() => {
				!this._connected && (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
			});
		}
		_processMutations(e) {
			for (let t of e) this._setAttr(t.attributeName);
		}
		_resolveDef() {
			if (this._pendingResolve) return this._pendingResolve;
			for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
			this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
			let e = (e, t = !1) => {
				let n;
				this._resolved = !0, this._pendingResolve = void 0;
				let { props: r, styles: i } = e;
				if (r && !T(r)) for (let e in r) {
					let t = r[e];
					(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = K(this._props[e])), (n || (n = Object.create(null)))[L(e)] = !0);
				}
				this._numberProps = n, this._resolveProps(e), this.shadowRoot && this._applyStyles(i), this._mount(e);
			}, t = this._def.__asyncLoader;
			if (t) return this._pendingResolve = t().then((t) => {
				t.configureApp = this._def.configureApp, e(this._def = t, !0);
			}), this._pendingResolve;
			e(this._def);
		}
		_mount(e) {
			this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
			let t = this._instance && this._instance.exposed;
			if (t) for (let e in t) k(this, e) || Object.defineProperty(this, e, { get: () => tE(t[e]) });
		}
		_resolveProps(e) {
			let { props: t } = e, n = T(t) ? t : Object.keys(t || {});
			for (let e of Object.keys(this)) "_" !== e[0] && n.includes(e) && this._setProp(e, this[e]);
			for (let e of n.map(L)) Object.defineProperty(this, e, {
				get() {
					return this._getProp(e);
				},
				set(t) {
					this._setProp(e, t, !0, !this._patching);
				}
			});
		}
		_setAttr(e) {
			if (e.startsWith("data-v-")) return;
			let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : sP, r = L(e);
			t && this._numberProps && this._numberProps[r] && (n = K(n)), this._setProp(r, n, !1, !0);
		}
		_getProp(e) {
			return this._props[e];
		}
		_setProp(e, t, n = !0, r = !1) {
			if (t !== this._props[e] && (this._dirty = !0, t === sP ? delete this._props[e] : (this._props[e] = t, "key" === e && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
				let n = this._ob;
				n && (this._processMutations(n.takeRecords()), n.disconnect()), !0 === t ? this.setAttribute(V(e), "") : "string" == typeof t || "number" == typeof t ? this.setAttribute(V(e), t + "") : t || this.removeAttribute(V(e)), n && n.observe(this, { attributes: !0 });
			}
		}
		_update() {
			let e = this._createVNode();
			this._app && (e.appContext = this._app._context), od(e, this._root);
		}
		_createVNode() {
			let e = {};
			this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
			let t = la(this._def, S(e, this._props));
			return this._instance || (t.ce = (e) => {
				this._instance = e, e.ce = this, e.isCE = !0;
				let t = (e, t) => {
					let n;
					this.dispatchEvent(new CustomEvent(e, "[object Object]" === (n = t[0], I.call(n)) ? S({ detail: t }, t[0]) : { detail: t }));
				};
				e.emit = (e, ...n) => {
					t(e, n), V(e) !== e && t(V(e), n);
				}, this._setParent();
			}), t;
		}
		_applyStyles(e, t, n) {
			if (!e) return;
			if (t) {
				if (t === this._def || this._styleChildren.has(t)) return;
				this._styleChildren.add(t);
			}
			let r = this._nonce, i = this.shadowRoot, l = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), s = null;
			for (let o = e.length - 1; o >= 0; o--) {
				let a = document.createElement("style");
				r && a.setAttribute("nonce", r), a.textContent = e[o], i.insertBefore(a, s || l), s = a, 0 === o && (n || this._styleAnchors.set(this._def, a), t && this._styleAnchors.set(t, a));
			}
		}
		_getStyleAnchor(e) {
			if (!e) return null;
			let t = this._styleAnchors.get(e);
			return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
		}
		_getRootStyleInsertionAnchor(e) {
			for (let t = 0; t < e.childNodes.length; t++) {
				let n = e.childNodes[t];
				if (!(n instanceof HTMLStyleElement)) return n;
			}
			return null;
		}
		_parseSlots() {
			let e, t = this._slots = {};
			for (; e = this.firstChild;) {
				let n = 1 === e.nodeType && e.getAttribute("slot") || "default";
				(t[n] || (t[n] = [])).push(e), this.removeChild(e);
			}
		}
		_renderSlots() {
			let e = this._getSlots(), t = this._instance.type.__scopeId;
			for (let n = 0; n < e.length; n++) {
				let r = e[n], i = r.getAttribute("name") || "default", l = this._slots[i], s = r.parentNode;
				if (l) for (let e of l) {
					if (t && 1 === e.nodeType) {
						let n, r = t + "-s", i = document.createTreeWalker(e, 1);
						for (e.setAttribute(r, ""); n = i.nextNode();) n.setAttribute(r, "");
					}
					s.insertBefore(e, r);
				}
				else for (; r.firstChild;) s.insertBefore(r.firstChild, r);
				s.removeChild(r);
			}
		}
		_getSlots() {
			let e = [this];
			this._teleportTargets && e.push(...this._teleportTargets);
			let t = /* @__PURE__ */ new Set();
			for (let n of e) {
				let e = n.querySelectorAll("slot");
				for (let n = 0; n < e.length; n++) t.add(e[n]);
			}
			return Array.from(t);
		}
		_injectChildStyle(e, t) {
			this._applyStyles(e.styles, e, t);
		}
		_beginPatch() {
			this._patching = !0, this._dirty = !1;
		}
		_endPatch() {
			this._patching = !1, this._dirty && this._instance && this._update();
		}
		_hasShadowRoot() {
			return !1 !== this._def.shadowRoot;
		}
		_removeChildStyle(e) {}
	};
	sj = /* @__PURE__ */ new WeakMap();
	sU = /* @__PURE__ */ new WeakMap();
	sH = Symbol("_moveCb");
	sq = Symbol("_enterCb");
	sW = (ob = {
		name: "TransitionGroup",
		props: S({}, l8, {
			tag: String,
			moveClass: String
		}),
		setup(e, { slots: t }) {
			let n, r, i = lC(), l = nF();
			return rC(() => {
				if (!n.length) return;
				let t = e.moveClass || `${e.name || "v"}-move`;
				if (!function(e, t, n) {
					let r = e.cloneNode(), i = e[l6];
					i && i.forEach((e) => {
						e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
					}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
					let l = 1 === t.nodeType ? t : t.parentNode;
					l.appendChild(r);
					let { hasTransform: s } = ss(r);
					return l.removeChild(r), s;
				}(n[0].el, i.vnode.el, t)) {
					n = [];
					return;
				}
				n.forEach(sK), n.forEach(sz);
				let r = n.filter(sJ);
				sc(i.vnode.el), r.forEach((e) => {
					let n = e.el, r = n.style;
					st(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
					let i = n[sH] = (e) => {
						(!e || e.target === n) && (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[sH] = null, sn(n, t));
					};
					n.addEventListener("transitionend", i);
				}), n = [];
			}), () => {
				let s = t_(e), o = se(s), a = s.tag || iY;
				if (n = [], r) for (let e = 0; e < r.length; e++) {
					let t = r[e];
					t.el && t.el instanceof Element && !t.el[sd] && (n.push(t), nW(t, nU(t, o, l, i)), sj.set(t, sG(t.el)));
				}
				r = t.default ? nK(t.default()) : [];
				for (let e = 0; e < r.length; e++) {
					let t = r[e];
					null != t.key && nW(t, nU(t, o, l, i));
				}
				return la(a, null, r);
			};
		}
	}, delete ob.props.mode, ob);
	sX = (e) => {
		let t = e.props["onUpdate:modelValue"] || !1;
		return T(t) ? (e) => H(t, e) : t;
	};
	sY = Symbol("_assign");
	s0 = Symbol("_initialValue");
	s2 = {
		created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
			e.parentNode && ("text" === e.type ? e[s0] = e.defaultValue.replace(/[\r\n]/g, "") : "textarea" === e.type && (e[s0] = e.defaultValue.replace(/\r\n?/g, `
`))), e[sY] = sX(i);
			let l = r || i.props && "number" === i.props.type;
			sT(e, t ? "change" : "input", (t) => {
				t.target.composing || e[sY](s1(e.value, n, l));
			}), (n || l) && sT(e, "change", () => {
				e.value = s1(e.value, n, l);
			}), t || (sT(e, "compositionstart", sQ), sT(e, "compositionend", sZ), sT(e, "change", sZ));
		},
		mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
			let i = e[s0];
			delete e[s0], void 0 !== i && ("text" === e.type || "textarea" === e.type) && e.value !== i ? e[sY](s1(e.value, n, r)) : e.value = null == t ? "" : t;
		},
		beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: l } }, s) {
			if (e[sY] = sX(s), e.composing) return;
			let o = (l || "number" === e.type) && !/^0\d/.test(e.value) ? W(e.value) : e.value, a = null == t ? "" : t;
			if (o === a) return;
			let c = e.getRootNode();
			(c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && "range" !== e.type && (r && t === n || i && e.value.trim() === a) || (e.value = a);
		}
	};
	s3 = {
		deep: !0,
		created(e, t, n) {
			e[sY] = sX(n), sT(e, "change", () => {
				let t = e._modelValue, n = s9(e), r = e.checked, i = e[sY];
				if (T(t)) {
					let e = ea(t, n), l = -1 !== e;
					if (r && !l) i(t.concat(n));
					else if (!r && l) {
						let n = [...t];
						n.splice(e, 1), i(n);
					}
				} else {
					let l;
					if ("[object Set]" === (l = t, I.call(l))) {
						let e = new Set(t);
						r ? e.add(n) : e.delete(n), i(e);
					} else i(s7(e, r));
				}
			});
		},
		mounted: s6,
		beforeUpdate(e, t, n) {
			e[sY] = sX(n), s6(e, t, n);
		}
	};
	s4 = {
		created(e, { value: t }, n) {
			e.checked = eo(t, n.props.value), e[sY] = sX(n), sT(e, "change", () => {
				e[sY](s9(e));
			});
		},
		beforeUpdate(e, { value: t, oldValue: n }, r) {
			e[sY] = sX(r), t !== n && (e.checked = eo(t, r.props.value));
		}
	};
	s8 = {
		deep: !0,
		created(e, { value: t, modifiers: { number: n } }, r) {
			e._modelValue = t, sT(e, "change", () => {
				let t, r = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? W(s9(e)) : s9(e));
				e[sY](e.multiple ? "[object Set]" === (t = e._modelValue, I.call(t)) ? new Set(r) : r : r[0]), e._assigning = !0, t4(() => {
					e._assigning = !1;
				});
			}), e[sY] = sX(r);
		},
		mounted(e, { value: t }) {
			s5(e, t);
		},
		beforeUpdate(e, { value: t }, n) {
			e._modelValue = t, e[sY] = sX(n);
		},
		updated(e, { value: t }) {
			e._assigning || s5(e, t);
		}
	};
	oe = {
		created(e, t, n) {
			on(e, t, n, null, "created");
		},
		mounted(e, t, n) {
			on(e, t, n, null, "mounted");
		},
		beforeUpdate(e, t, n, r) {
			on(e, t, n, r, "beforeUpdate");
		},
		updated(e, t, n, r) {
			on(e, t, n, r, "updated");
		}
	};
	or = [
		"ctrl",
		"shift",
		"alt",
		"meta"
	];
	oi = {
		stop: (e) => e.stopPropagation(),
		prevent: (e) => e.preventDefault(),
		self: (e) => e.target !== e.currentTarget,
		ctrl: (e) => !e.ctrlKey,
		shift: (e) => !e.shiftKey,
		alt: (e) => !e.altKey,
		meta: (e) => !e.metaKey,
		left: (e) => "button" in e && 0 !== e.button,
		middle: (e) => "button" in e && 1 !== e.button,
		right: (e) => "button" in e && 2 !== e.button,
		exact: (e, t) => or.some((n) => e[`${n}Key`] && !t.includes(n))
	};
	ol = (e, t) => {
		if (!e) return e;
		let n = e._withMods || (e._withMods = {}), r = t.join(".");
		return n[r] || (n[r] = (n, ...r) => {
			for (let e = 0; e < t.length; e++) {
				let r = oi[t[e]];
				if (r && r(n, t)) return;
			}
			return e(n, ...r);
		});
	};
	os = {
		esc: "escape",
		space: " ",
		up: "arrow-up",
		left: "arrow-left",
		right: "arrow-right",
		down: "arrow-down",
		delete: "backspace"
	};
	oo = (e, t) => {
		let n = e._withKeys || (e._withKeys = {}), r = t.join(".");
		return n[r] || (n[r] = (n) => {
			if (!("key" in n)) return;
			let r = V(n.key);
			if (t.some((e) => e === r || os[e] === r)) return e(n);
		});
	};
	oa = S({ patchProp: sO }, l1);
	oc = !1;
	od = (...e) => {
		(c || (c = iL(oa))).render(...e);
	};
	op = (...e) => {
		ou().hydrate(...e);
	};
	oh = (...e) => {
		let t = (c || (c = iL(oa))).createApp(...e), { mount: n } = t;
		return t.mount = (e) => {
			let r = om(e);
			if (!r) return;
			let i = t._component;
			w(i) || i.render || i.template || (i.template = r.innerHTML), 1 === r.nodeType && (r.textContent = "");
			let l = n(r, !1, og(r));
			return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
		}, t;
	};
	of = (...e) => {
		let t = ou().createApp(...e), { mount: n } = t;
		return t.mount = (e) => {
			let t = om(e);
			if (t) return n(t, !0, og(t));
		}, t;
	};
	oy = !1;
	ov = () => {
		oy || (oy = !0, s2.getSSRProps = ({ value: e }) => ({ value: e }), s4.getSSRProps = ({ value: e }, t) => {
			if (t.props && eo(t.props.value, e)) return { checked: !0 };
		}, s3.getSSRProps = ({ value: e }, t) => {
			if (T(e)) {
				if (t.props && ea(e, t.props.value) > -1) return { checked: !0 };
			} else {
				let n;
				if ("[object Set]" === (n = e, I.call(n))) {
					if (t.props && e.has(t.props.value)) return { checked: !0 };
				} else if (e) return { checked: !0 };
			}
		}, oe.getSSRProps = (e, t) => {
			if ("string" != typeof t.type) return;
			let n = ot(t.type.toUpperCase(), t.props && t.props.type);
			if (n.getSSRProps) return n.getSSRProps(e, t);
		}, sp.getSSRProps = ({ value: e }) => {
			if (!e) return { style: { display: "none" } };
		});
	};
	ox = Object.freeze({
		__proto__: null,
		BaseTransition: nB,
		BaseTransitionPropsValidators: nL,
		Comment: i1,
		DeprecationTypes: null,
		EffectScope: eh,
		ErrorCodes: tJ,
		ErrorTypeStrings: null,
		Fragment: iY,
		KeepAlive: rd,
		ReactiveEffect: ev,
		Static: i2,
		Suspense: iz,
		Teleport: nR,
		Text: i0,
		TrackOpTypes: tB,
		Transition: l5,
		TransitionGroup: sW,
		TriggerOpTypes: tj,
		VueElement: sL,
		assertNumber: tz,
		callWithAsyncErrorHandling: tX,
		callWithErrorHandling: tG,
		camelize: L,
		capitalize: B,
		cloneVNode: lu,
		compatUtils: null,
		computed: lL,
		createApp: oh,
		createBlock: lt,
		createCommentVNode: lh,
		createElementBlock: le,
		createElementVNode: lo,
		createHydrationRenderer: i$,
		createPropsRestProxy: r8,
		createRenderer: iL,
		createSSRApp: of,
		createSlots: r$,
		createStaticVNode: lp,
		createTextVNode: ld,
		createVNode: la,
		customRef: tM,
		defineAsyncComponent: ra,
		defineComponent: nz,
		defineCustomElement: sM,
		defineEmits: rJ,
		defineExpose: rG,
		defineModel: rZ,
		defineOptions: rX,
		defineProps: rz,
		defineSSRCustomElement: sF,
		defineSlots: rQ,
		devtools: lW,
		effect: eN,
		effectScope: ef,
		getCurrentInstance: lC,
		getCurrentScope: eg,
		getCurrentWatcher: tq,
		getTransitionRawChildren: nK,
		guardReactiveProps: lc,
		h: l$,
		handleError: tQ,
		hasInjectionContext: nh,
		hydrate: op,
		hydrateOnIdle: rr,
		hydrateOnInteraction: rs,
		hydrateOnMediaQuery: rl,
		hydrateOnVisible: ri,
		initCustomFormatter: lV,
		initDirectivesForSSR: ov,
		inject: np,
		isMemoSame: lj,
		isProxy: tv,
		isReactive: tg,
		isReadonly: tm,
		isRef: tC,
		isRuntimeOnly: lI,
		isShallow: ty,
		isVNode: ln,
		markRaw: tb,
		mergeDefaults: r6,
		mergeModels: r4,
		mergeProps: ly,
		nextTick: t4,
		nodeOps: l1,
		normalizeClass: ee,
		normalizeProps: et,
		normalizeStyle: G,
		onActivated: rh,
		onBeforeMount: rb,
		onBeforeUnmount: rk,
		onBeforeUpdate: rx,
		onDeactivated: rf,
		onErrorCaptured: rE,
		onMounted: rS,
		onRenderTracked: rA,
		onRenderTriggered: rN,
		onScopeDispose: em,
		onServerPrefetch: rw,
		onUnmounted: rT,
		onUpdated: rC,
		onWatcherCleanup: tW,
		openBlock: i4,
		patchProp: sO,
		popScopeId: ns,
		provide: nd,
		proxyRefs: tO,
		pushScopeId: nl,
		queuePostFlushCb: t9,
		reactive: tu,
		readonly: tp,
		ref: tk,
		registerRuntimeCompiler: lR,
		render: od,
		renderList: rL,
		renderSlot: rV,
		resolveComponent: rI,
		resolveDirective: rM,
		resolveDynamicComponent: rP,
		resolveFilter: null,
		resolveTransitionHooks: nU,
		setBlockTracking: i9,
		setDevtoolsHook: lK,
		setTransitionHooks: nW,
		shallowReactive: td,
		shallowReadonly: th,
		shallowRef: tT,
		ssrContextKey: nf,
		ssrUtils: lz,
		stop: eA,
		toDisplayString: eu,
		toHandlerKey: j,
		toHandlers: rj,
		toRaw: t_,
		toRef: t$,
		toRefs: tF,
		toValue: tR,
		transformVNodeArgs: li,
		triggerRef: tA,
		unref: tE,
		useAttrs: r1,
		useCssModule: sB,
		useCssVars: sg,
		useHost: s$,
		useId: nJ,
		useModel: ip,
		useSSRContext: ng,
		useShadowRoot: sV,
		useSlots: r0,
		useTemplateRef: nX,
		useTransitionState: nF,
		vModelCheckbox: s3,
		vModelDynamic: oe,
		vModelRadio: s4,
		vModelSelect: s8,
		vModelText: s2,
		vShow: sp,
		version: lU,
		warn: lH,
		watch: n_,
		watchEffect: nm,
		watchPostEffect: ny,
		watchSyncEffect: nv,
		withAsyncContext: r5,
		withCtx: na,
		withDefaults: rY,
		withDirectives: nc,
		withKeys: oo,
		withMemo: lB,
		withModifiers: ol,
		withScopeId: no
	});
	oC = Symbol("");
	ok = Symbol("");
	oT = Symbol("");
	ow = Symbol("");
	oN = Symbol("");
	oA = Symbol("");
	oE = Symbol("");
	oR = Symbol("");
	oI = Symbol("");
	oO = Symbol("");
	oP = Symbol("");
	oM = Symbol("");
	oF = Symbol("");
	oD = Symbol("");
	oL = Symbol("");
	o$ = Symbol("");
	oV = Symbol("");
	oB = Symbol("");
	oj = Symbol("");
	oU = Symbol("");
	oH = Symbol("");
	oq = Symbol("");
	oW = Symbol("");
	oK = Symbol("");
	oz = Symbol("");
	oJ = Symbol("");
	oG = Symbol("");
	oX = Symbol("");
	oQ = Symbol("");
	oZ = Symbol("");
	oY = Symbol("");
	o0 = Symbol("");
	o1 = Symbol("");
	o2 = Symbol("");
	o3 = Symbol("");
	o6 = Symbol("");
	o4 = Symbol("");
	o8 = Symbol("");
	o5 = Symbol("");
	o9 = {
		[oC]: "Fragment",
		[ok]: "Teleport",
		[oT]: "Suspense",
		[ow]: "KeepAlive",
		[oN]: "BaseTransition",
		[oA]: "openBlock",
		[oE]: "createBlock",
		[oR]: "createElementBlock",
		[oI]: "createVNode",
		[oO]: "createElementVNode",
		[oP]: "createCommentVNode",
		[oM]: "createTextVNode",
		[oF]: "createStaticVNode",
		[oD]: "resolveComponent",
		[oL]: "resolveDynamicComponent",
		[o$]: "resolveDirective",
		[oV]: "resolveFilter",
		[oB]: "withDirectives",
		[oj]: "renderList",
		[oU]: "renderSlot",
		[oH]: "createSlots",
		[oq]: "toDisplayString",
		[oW]: "mergeProps",
		[oK]: "normalizeClass",
		[oz]: "normalizeStyle",
		[oJ]: "normalizeProps",
		[oG]: "guardReactiveProps",
		[oX]: "toHandlers",
		[oQ]: "camelize",
		[oZ]: "capitalize",
		[oY]: "toHandlerKey",
		[o0]: "setBlockTracking",
		[o1]: "pushScopeId",
		[o2]: "popScopeId",
		[o3]: "withCtx",
		[o6]: "unref",
		[o4]: "isRef",
		[o8]: "withMemo",
		[o5]: "isMemoSame"
	};
	o7 = {
		start: {
			line: 1,
			column: 1,
			offset: 0
		},
		end: {
			line: 1,
			column: 1,
			offset: 0
		},
		source: ""
	};
	au = new Uint8Array([123, 123]);
	ad = new Uint8Array([125, 125]);
	am = {
		Cdata: new Uint8Array([
			67,
			68,
			65,
			84,
			65,
			91
		]),
		CdataEnd: new Uint8Array([
			93,
			93,
			62
		]),
		CommentEnd: new Uint8Array([
			45,
			45,
			62
		]),
		ScriptEnd: new Uint8Array([
			60,
			47,
			115,
			99,
			114,
			105,
			112,
			116
		]),
		StyleEnd: new Uint8Array([
			60,
			47,
			115,
			116,
			121,
			108,
			101
		]),
		TitleEnd: new Uint8Array([
			60,
			47,
			116,
			105,
			116,
			108,
			101
		]),
		TextareaEnd: new Uint8Array([
			60,
			47,
			116,
			101,
			120,
			116,
			97,
			114,
			101,
			97
		])
	};
	ab = (e) => 4 === e.type && e.isStatic;
	ax = /^$|^\d|[^\$\w\xA0-\uFFFF]/;
	aC = /[A-Za-z_$\xA0-\uFFFF]/;
	ak = /[\.\?\w$\xA0-\uFFFF]/;
	aT = /\s+[.[]\s*|\s*[.[]\s+/g;
	aw = (e) => 4 === e.type ? e.content : e.loc.source;
	aN = (e) => {
		let t = aw(e).trim().replace(aT, (e) => e.trim()), n = 0, r = [], i = 0, l = 0, s = null;
		for (let e = 0; e < t.length; e++) {
			let o = t.charAt(e);
			switch (n) {
				case 0:
					if ("[" === o) r.push(n), n = 1, i++;
					else if ("(" === o) r.push(n), n = 2, l++;
					else if (!(0 === e ? aC : ak).test(o)) return !1;
					break;
				case 1:
					"'" === o || "\"" === o || "`" === o ? (r.push(n), n = 3, s = o) : "[" === o ? i++ : "]" !== o || --i || (n = r.pop());
					break;
				case 2:
					if ("'" === o || "\"" === o || "`" === o) r.push(n), n = 3, s = o;
					else if ("(" === o) l++;
					else if (")" === o) {
						if (e === t.length - 1) return !1;
						--l || (n = r.pop());
					}
					break;
				case 3: o === s && (n = r.pop(), s = null);
			}
		}
		return !i && !l;
	};
	aA = /^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/;
	aL = /* @__PURE__ */ new Set([oJ, oG]);
	aU = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
	aK = {
		parseMode: "base",
		ns: 0,
		delimiters: ["{{", "}}"],
		getNamespace: () => 0,
		isVoidTag: y,
		isPreTag: y,
		isIgnoreNewlineTag: y,
		isCustomElement: y,
		onError: ay,
		onWarn: av,
		comments: !1,
		prefixIdentifiers: !1
	};
	az = aK;
	aJ = null;
	aG = "";
	aX = null;
	aQ = null;
	aZ = "";
	aY = -1;
	a0 = -1;
	a1 = 0;
	a2 = !1;
	a3 = null;
	a6 = [];
	a4 = new class {
		constructor(e, t) {
			this.stack = e, this.cbs = t, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = au, this.delimiterClose = ad, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
		}
		get inSFCRoot() {
			return 2 === this.mode && 0 === this.stack.length;
		}
		reset() {
			this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = au, this.delimiterClose = ad;
		}
		getPos(e) {
			let t = 1, n = e + 1, r = this.newlines.length, i = -1;
			if (r > 100) {
				let t = -1, n = r;
				for (; t + 1 < n;) {
					let r = t + n >>> 1;
					this.newlines[r] < e ? t = r : n = r;
				}
				i = t;
			} else for (let t = r - 1; t >= 0; t--) if (e > this.newlines[t]) {
				i = t;
				break;
			}
			return i >= 0 && (t = i + 2, n = e - this.newlines[i]), {
				column: n,
				line: t,
				offset: e
			};
		}
		peek() {
			return this.buffer.charCodeAt(this.index + 1);
		}
		stateText(e) {
			60 === e ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : this.inVPre || e !== this.delimiterOpen[0] || (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e));
		}
		stateInterpolationOpen(e) {
			if (e === this.delimiterOpen[this.delimiterIndex]) if (this.delimiterIndex === this.delimiterOpen.length - 1) {
				let e = this.index + 1 - this.delimiterOpen.length;
				e > this.sectionStart && this.cbs.ontext(this.sectionStart, e), this.state = 3, this.sectionStart = e;
			} else this.delimiterIndex++;
			else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(e)) : (this.state = 1, this.stateText(e));
		}
		stateInterpolation(e) {
			e === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(e));
		}
		stateInterpolationClose(e) {
			e === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(e));
		}
		stateSpecialStartSequence(e) {
			let t = this.sequenceIndex === this.currentSequence.length;
			if (t ? af(e) : (32 | e) === this.currentSequence[this.sequenceIndex]) {
				if (!t) return void this.sequenceIndex++;
			} else this.inRCDATA = !1;
			this.sequenceIndex = 0, this.state = 6, this.stateInTagName(e);
		}
		stateInRCDATA(e) {
			if (this.sequenceIndex === this.currentSequence.length) {
				if (62 === e || ah(e)) {
					let t = this.index - this.currentSequence.length;
					if (this.sectionStart < t) {
						let e = this.index;
						this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = e;
					}
					this.sectionStart = t + 2, this.stateInClosingTagName(e), this.inRCDATA = !1;
					return;
				}
				this.sequenceIndex = 0;
			}
			(32 | e) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence !== am.TitleEnd && (this.currentSequence !== am.TextareaEnd || this.inSFCRoot) ? this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.inVPre || e !== this.delimiterOpen[0] || (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e)) : this.sequenceIndex = Number(60 === e);
		}
		stateCDATASequence(e) {
			e === am.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === am.Cdata.length && (this.state = 28, this.currentSequence = am.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(e));
		}
		fastForwardTo(e) {
			for (; ++this.index < this.buffer.length;) {
				let t = this.buffer.charCodeAt(this.index);
				if (10 === t && this.newlines.push(this.index), t === e) return !0;
			}
			return this.index = this.buffer.length - 1, !1;
		}
		stateInCommentLike(e) {
			e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === am.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
		}
		startSpecial(e, t) {
			this.enterRCDATA(e, t), this.state = 31;
		}
		enterRCDATA(e, t) {
			this.inRCDATA = !0, this.currentSequence = e, this.sequenceIndex = t;
		}
		stateBeforeTagName(e) {
			33 === e ? (this.state = 22, this.sectionStart = this.index + 1) : 63 === e ? (this.state = 24, this.sectionStart = this.index + 1) : ap(e) ? (this.sectionStart = this.index, 0 === this.mode ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : 116 === e ? this.state = 30 : this.state = 115 === e ? 29 : 6) : 47 === e ? this.state = 8 : (this.state = 1, this.stateText(e));
		}
		stateInTagName(e) {
			af(e) && this.handleTagName(e);
		}
		stateInSFCRootTagName(e) {
			if (af(e)) {
				let t = this.buffer.slice(this.sectionStart, this.index);
				"template" !== t && this.enterRCDATA(ag("</" + t), 0), this.handleTagName(e);
			}
		}
		handleTagName(e) {
			this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e);
		}
		stateBeforeClosingTagName(e) {
			ah(e) || (62 === e ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = ap(e) ? 9 : 27, this.sectionStart = this.index));
		}
		stateInClosingTagName(e) {
			(62 === e || ah(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(e));
		}
		stateAfterClosingTagName(e) {
			62 === e && (this.state = 1, this.sectionStart = this.index + 1);
		}
		stateBeforeAttrName(e) {
			62 === e ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : 47 === e ? this.state = 7 : 60 === e && 47 === this.peek() ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : ah(e) || this.handleAttrStart(e);
		}
		handleAttrStart(e) {
			118 === e && 45 === this.peek() ? (this.state = 13, this.sectionStart = this.index) : 46 === e || 58 === e || 64 === e || 35 === e ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
		}
		stateInSelfClosingTag(e) {
			62 === e ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : ah(e) || (this.state = 11, this.stateBeforeAttrName(e));
		}
		stateInAttrName(e) {
			(61 === e || af(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(e));
		}
		stateInDirName(e) {
			61 === e || af(e) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : 58 === e ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : 46 === e && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
		}
		stateInDirArg(e) {
			61 === e || af(e) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : 91 === e ? this.state = 15 : 46 === e && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
		}
		stateInDynamicDirArg(e) {
			93 === e ? this.state = 14 : (61 === e || af(e)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(e));
		}
		stateInDirModifier(e) {
			61 === e || af(e) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : 46 === e && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
		}
		handleAttrNameEnd(e) {
			this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(e);
		}
		stateAfterAttrName(e) {
			61 === e ? this.state = 18 : 47 === e || 62 === e ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e)) : ah(e) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(e));
		}
		stateBeforeAttrValue(e) {
			34 === e ? (this.state = 19, this.sectionStart = this.index + 1) : 39 === e ? (this.state = 20, this.sectionStart = this.index + 1) : ah(e) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(e));
		}
		handleInAttrValue(e, t) {
			(e === t || this.fastForwardTo(t)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(34 === t ? 3 : 2, this.index + 1), this.state = 11);
		}
		stateInAttrValueDoubleQuotes(e) {
			this.handleInAttrValue(e, 34);
		}
		stateInAttrValueSingleQuotes(e) {
			this.handleInAttrValue(e, 39);
		}
		stateInAttrValueNoQuotes(e) {
			ah(e) || 62 === e ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(e)) : (39 === e || 60 === e || 61 === e || 96 === e) && this.cbs.onerr(18, this.index);
		}
		stateBeforeDeclaration(e) {
			91 === e ? (this.state = 26, this.sequenceIndex = 0) : this.state = 45 === e ? 25 : 23;
		}
		stateInDeclaration(e) {
			(62 === e || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
		}
		stateInProcessingInstruction(e) {
			(62 === e || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
		}
		stateBeforeComment(e) {
			45 === e ? (this.state = 28, this.currentSequence = am.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
		}
		stateInSpecialComment(e) {
			(62 === e || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
		}
		stateBeforeSpecialS(e) {
			e === am.ScriptEnd[3] ? this.startSpecial(am.ScriptEnd, 4) : e === am.StyleEnd[3] ? this.startSpecial(am.StyleEnd, 4) : (this.state = 6, this.stateInTagName(e));
		}
		stateBeforeSpecialT(e) {
			e === am.TitleEnd[3] ? this.startSpecial(am.TitleEnd, 4) : e === am.TextareaEnd[3] ? this.startSpecial(am.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(e));
		}
		startEntity() {}
		stateInEntity() {}
		parse(e) {
			for (this.buffer = e; this.index < this.buffer.length;) {
				let e = this.buffer.charCodeAt(this.index);
				switch (10 === e && 33 !== this.state && this.newlines.push(this.index), this.state) {
					case 1:
						this.stateText(e);
						break;
					case 2:
						this.stateInterpolationOpen(e);
						break;
					case 3:
						this.stateInterpolation(e);
						break;
					case 4:
						this.stateInterpolationClose(e);
						break;
					case 31:
						this.stateSpecialStartSequence(e);
						break;
					case 32:
						this.stateInRCDATA(e);
						break;
					case 26:
						this.stateCDATASequence(e);
						break;
					case 19:
						this.stateInAttrValueDoubleQuotes(e);
						break;
					case 12:
						this.stateInAttrName(e);
						break;
					case 13:
						this.stateInDirName(e);
						break;
					case 14:
						this.stateInDirArg(e);
						break;
					case 15:
						this.stateInDynamicDirArg(e);
						break;
					case 16:
						this.stateInDirModifier(e);
						break;
					case 28:
						this.stateInCommentLike(e);
						break;
					case 27:
						this.stateInSpecialComment(e);
						break;
					case 11:
						this.stateBeforeAttrName(e);
						break;
					case 6:
						this.stateInTagName(e);
						break;
					case 34:
						this.stateInSFCRootTagName(e);
						break;
					case 9:
						this.stateInClosingTagName(e);
						break;
					case 5:
						this.stateBeforeTagName(e);
						break;
					case 17:
						this.stateAfterAttrName(e);
						break;
					case 20:
						this.stateInAttrValueSingleQuotes(e);
						break;
					case 18:
						this.stateBeforeAttrValue(e);
						break;
					case 8:
						this.stateBeforeClosingTagName(e);
						break;
					case 10:
						this.stateAfterClosingTagName(e);
						break;
					case 29:
						this.stateBeforeSpecialS(e);
						break;
					case 30:
						this.stateBeforeSpecialT(e);
						break;
					case 21:
						this.stateInAttrValueNoQuotes(e);
						break;
					case 7:
						this.stateInSelfClosingTag(e);
						break;
					case 23:
						this.stateInDeclaration(e);
						break;
					case 22:
						this.stateBeforeDeclaration(e);
						break;
					case 25:
						this.stateBeforeComment(e);
						break;
					case 24:
						this.stateInProcessingInstruction(e);
						break;
					case 33: this.stateInEntity();
				}
				this.index++;
			}
			this.cleanup(), this.finish();
		}
		cleanup() {
			this.sectionStart !== this.index && (1 === this.state || 32 === this.state && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (19 === this.state || 20 === this.state || 21 === this.state) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
		}
		finish() {
			this.handleTrailingData(), this.cbs.onend();
		}
		handleTrailingData() {
			let e = this.buffer.length;
			this.sectionStart >= e || (28 === this.state ? this.currentSequence === am.CdataEnd ? this.cbs.oncdata(this.sectionStart, e) : this.cbs.oncomment(this.sectionStart, e) : 6 === this.state || 11 === this.state || 18 === this.state || 17 === this.state || 12 === this.state || 13 === this.state || 14 === this.state || 15 === this.state || 16 === this.state || 20 === this.state || 19 === this.state || 21 === this.state || 9 === this.state || this.cbs.ontext(this.sectionStart, e));
		}
		emitCodePoint(e, t) {}
	}(a6, {
		onerr: cd,
		ontext(e, t) {
			ce(a9(e, t), e, t);
		},
		ontextentity(e, t, n) {
			ce(e, t, n);
		},
		oninterpolation(e, t) {
			if (a2) return ce(a9(e, t), e, t);
			let n = e + a4.delimiterOpen.length, r = t - a4.delimiterClose.length;
			for (; ah(aG.charCodeAt(n));) n++;
			for (; ah(aG.charCodeAt(r - 1));) r--;
			let i = a9(n, r);
			i.includes("&") && (i = az.decodeEntities(i, !1)), co({
				type: 5,
				content: cu(i, !1, ca(n, r)),
				loc: ca(e, t)
			});
		},
		onopentagname(e, t) {
			let n = a9(e, t);
			aX = {
				type: 1,
				tag: n,
				ns: az.getNamespace(n, a6[0], az.ns),
				tagType: 0,
				props: [],
				children: [],
				loc: ca(e - 1, t),
				codegenNode: void 0
			};
		},
		onopentagend(e) {
			a7(e);
		},
		onclosetag(e, t) {
			let n = a9(e, t);
			if (!az.isVoidTag(n)) {
				let r = !1;
				for (let e = 0; e < a6.length; e++) if (a6[e].tag.toLowerCase() === n.toLowerCase()) {
					r = !0, e > 0 && a6[0].loc.start.offset;
					for (let n = 0; n <= e; n++) ct(a6.shift(), t, n < e);
					break;
				}
				r || cn(e, 60);
			}
		},
		onselfclosingtag(e) {
			let t = aX.tag;
			aX.isSelfClosing = !0, a7(e), a6[0] && a6[0].tag === t && ct(a6.shift(), e);
		},
		onattribname(e, t) {
			aQ = {
				type: 6,
				name: a9(e, t),
				nameLoc: ca(e, t),
				value: void 0,
				loc: ca(e)
			};
		},
		ondirname(e, t) {
			let n = a9(e, t), r = "." === n || ":" === n ? "bind" : "@" === n ? "on" : "#" === n ? "slot" : n.slice(2);
			if (a2 || "" === r) aQ = {
				type: 6,
				name: n,
				nameLoc: ca(e, t),
				value: void 0,
				loc: ca(e)
			};
			else if (aQ = {
				type: 7,
				name: r,
				rawName: n,
				exp: void 0,
				arg: void 0,
				modifiers: "." === n ? [ai("prop")] : [],
				loc: ca(e)
			}, "pre" === r) {
				a2 = a4.inVPre = !0, a3 = aX;
				let e = aX.props;
				for (let t = 0; t < e.length; t++) 7 === e[t].type && (e[t] = function(e) {
					let t = {
						type: 6,
						name: e.rawName,
						nameLoc: ca(e.loc.start.offset, e.loc.start.offset + e.rawName.length),
						value: void 0,
						loc: e.loc
					};
					if (e.exp) {
						let n = e.exp.loc;
						n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
							type: 2,
							content: e.exp.content,
							loc: n
						};
					}
					return t;
				}(e[t]));
			}
		},
		ondirarg(e, t) {
			if (e === t) return;
			let n = a9(e, t);
			if (a2 && !aP(aQ)) aQ.name += n, cc(aQ.nameLoc, t);
			else {
				let r = "[" !== n[0];
				aQ.arg = cu(r ? n : n.slice(1, -1), r, ca(e, t), 3 * !!r);
			}
		},
		ondirmodifier(e, t) {
			let n = a9(e, t);
			if (a2 && !aP(aQ)) aQ.name += "." + n, cc(aQ.nameLoc, t);
			else if ("slot" === aQ.name) {
				let e = aQ.arg;
				e && (e.content += "." + n, cc(e.loc, t));
			} else {
				let r = ai(n, !0, ca(e, t));
				aQ.modifiers.push(r);
			}
		},
		onattribdata(e, t) {
			aZ += a9(e, t), aY < 0 && (aY = e), a0 = t;
		},
		onattribentity(e, t, n) {
			aZ += e, aY < 0 && (aY = t), a0 = n;
		},
		onattribnameend(e) {
			let t = a9(aQ.loc.start.offset, e);
			7 === aQ.type && (aQ.rawName = t), aX.props.some((e) => (7 === e.type ? e.rawName : e.name) === t);
		},
		onattribend(e, t) {
			aX && aQ && (cc(aQ.loc, t), 0 !== e && (aZ.includes("&") && (aZ = az.decodeEntities(aZ, !0)), 6 === aQ.type ? ("class" === aQ.name && (aZ = cs(aZ).trim()), aQ.value = {
				type: 2,
				content: aZ,
				loc: 1 === e ? ca(aY, a0) : ca(aY - 1, a0 + 1)
			}, a4.inSFCRoot && "template" === aX.tag && "lang" === aQ.name && aZ && "html" !== aZ && a4.enterRCDATA(ag("</template"), 0)) : (aQ.exp = cu(aZ, !1, ca(aY, a0), 0, 0), "for" === aQ.name && (aQ.forParseResult = function(e) {
				let t = e.loc, n = e.content, r = n.match(aU);
				if (!r) return;
				let [, i, l] = r, s = (e, n, r = !1) => {
					let i = t.start.offset + n;
					return cu(e, !1, ca(i, i + e.length), 0, +!!r);
				}, o = {
					source: s(l.trim(), n.indexOf(l, i.length)),
					value: void 0,
					key: void 0,
					index: void 0,
					finalized: !1
				}, a = i.trim().replace(a5, "").trim(), c = i.indexOf(a), u = a.match(a8);
				if (u) {
					let e;
					a = a.replace(a8, "").trim();
					let t = u[1].trim();
					if (t && (e = n.indexOf(t, c + a.length), o.key = s(t, e, !0)), u[2]) {
						let r = u[2].trim();
						r && (o.index = s(r, n.indexOf(r, o.key ? e + t.length : c + a.length), !0));
					}
				}
				return a && (o.value = s(a, c, !0)), o;
			}(aQ.exp)))), (7 !== aQ.type || "pre" !== aQ.name) && aX.props.push(aQ)), aZ = "", aY = a0 = -1;
		},
		oncomment(e, t) {
			az.comments && co({
				type: 3,
				content: a9(e, t),
				loc: ca(e - 4, t + 3)
			});
		},
		onend() {
			let e = aG.length;
			for (let t = 0; t < a6.length; t++) ct(a6[t], e - 1), a6[t].loc.start.offset;
		},
		oncdata(e, t) {
			(a6[0] ? a6[0].ns : az.ns) !== 0 && ce(a9(e, t), e, t);
		},
		onprocessinginstruction(e) {
			(a6[0] ? a6[0].ns : az.ns) === 0 && cd(21, e - 1);
		}
	});
	a8 = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
	a5 = /^\(|\)$/g;
	cr = /* @__PURE__ */ new Set([
		"if",
		"else",
		"else-if",
		"for",
		"slot"
	]);
	ci = /\r\n/g;
	cf = /* @__PURE__ */ new Set([
		oK,
		oz,
		oJ,
		oG
	]);
	c_ = "/*@__PURE__*/";
	cb = (e) => `${o9[e]}: _${o9[e]}`;
	cN = cv(/^(?:if|else|else-if)$/, (e, t, n) => (function(e, t, n, r) {
		if ("else" !== t.name && (!t.exp || !t.exp.content.trim())) {
			let r = t.exp ? t.exp.loc : e.loc;
			n.onError(a_(28, t.loc)), t.exp = ai("true", !1, r);
		}
		if ("if" === t.name) {
			var i;
			let l = cA(e, t), s = {
				type: 9,
				loc: ca((i = e.loc).start.offset, i.end.offset),
				branches: [l]
			};
			if (n.replaceNode(s), r) return r(s, l, !0);
		} else {
			let i = n.parent.children, l = i.indexOf(e);
			for (; l-- >= -1;) {
				let s = i[l];
				if (s && aW(s)) {
					n.removeNode(s);
					continue;
				}
				if (s && 9 === s.type) {
					("else-if" === t.name || "else" === t.name) && void 0 === s.branches[s.branches.length - 1].condition && n.onError(a_(30, e.loc)), n.removeNode();
					let i = cA(e, t);
					s.branches.push(i);
					let l = r && r(s, i, !1);
					cy(i, n), l && l(), n.currentNode = null;
				} else n.onError(a_(30, e.loc));
				break;
			}
		}
	})(e, t, n, (e, t, r) => {
		let i = n.parent.children, l = i.indexOf(e), s = 0;
		for (; l-- >= 0;) {
			let e = i[l];
			e && 9 === e.type && (s += e.branches.length);
		}
		return () => {
			r ? e.codegenNode = cE(t, s, n) : function(e) {
				for (;;) if (19 === e.type) if (19 !== e.alternate.type) return e;
				else e = e.alternate;
				else 20 === e.type && (e = e.value);
			}(e.codegenNode).alternate = cE(t, s + e.branches.length - 1, n);
		};
	}));
	cI = cv("for", (e, t, n) => {
		let { helper: r, removeHelper: i } = n;
		return function(e, t, n, r) {
			if (!t.exp) return void n.onError(a_(31, t.loc));
			let i = t.forParseResult;
			if (!i) return void n.onError(a_(32, t.loc));
			cO(i);
			let { scopes: l } = n, { source: s, value: o, key: a, index: c } = i, u = {
				type: 11,
				loc: t.loc,
				source: s,
				valueAlias: o,
				keyAlias: a,
				objectIndexAlias: c,
				parseResult: i,
				children: aF(e) ? e.children : [e]
			};
			n.replaceNode(u), l.vFor++;
			let d = r && r(u);
			return () => {
				l.vFor--, d && d();
			};
		}(e, t, n, (t) => {
			let l = as(r(oj), [t.source]), s = aF(e), o = aE(e, "memo"), a = aR(e, "key", !1, !0);
			a && a.type;
			let c = a && (6 === a.type ? a.value ? ai(a.value.content, !0) : void 0 : a.exp), u = c ? ar("key", c) : null, d = 4 === t.source.type && t.source.constType > 0, p = d ? 64 : a ? 128 : 256;
			return t.codegenNode = ae(n, r(oC), void 0, l, p, void 0, void 0, !0, !d, !1, e.loc), () => {
				var a, p, h, f, g, m, y, _, b;
				let S, { children: x } = t, C = 1 !== x.length || 1 !== x[0].type, k = aD(e) ? e : s && 1 === e.children.length && aD(e.children[0]) ? e.children[0] : null;
				if (k) S = k.codegenNode, s && u && aV(S, u, n);
				else if (C) S = ae(n, r(oC), u ? an([u]) : void 0, e.children, 64, void 0, void 0, !0, void 0, !1);
				else {
					S = x[0].codegenNode, s && u && aV(S, u, n);
					let e = !d || !0 === S.isBlockRequired;
					S.isBlock !== e && (S.isBlock ? (i(oA), i((p = n.inSSR, h = S.isComponent, p || h ? oE : oR))) : i((f = n.inSSR, g = S.isComponent, f || g ? oI : oO))), (S.isBlock = e, S.isBlock) ? (r(oA), r((m = n.inSSR, y = S.isComponent, m || y ? oE : oR))) : (r((_ = n.inSSR, b = S.isComponent, _ || b ? oI : oO)), S.needsPatch && (S.patchFlag = (null != (a = S.patchFlag) ? a : 0) | 512));
				}
				if (o) {
					let e = ao(cP(t.parseResult, [ai("_cached")]));
					e.body = {
						type: 21,
						body: [
							al([
								"const _memo = (",
								o.exp,
								")"
							]),
							al([
								"if (_cached && _cached.el",
								...c ? [" && _cached.key === ", c] : [],
								` && ${n.helperString(o5)}(_cached, _memo)) return _cached`
							]),
							al(["const _item = ", S]),
							ai("_item.memo = _memo"),
							ai("return _item")
						],
						loc: o7
					}, l.arguments.push(e, ai("_cache"), ai(String(n.cached.length))), n.cached.push(null);
				} else l.arguments.push(ao(cP(t.parseResult), S, !0));
			};
		});
	});
	cM = ai("undefined", !1);
	cF = (e, t) => {
		if (1 === e.type && (1 === e.tagType || 3 === e.tagType)) {
			let n = aE(e, "slot");
			if (n) return n.exp, t.scopes.vSlot++, () => {
				t.scopes.vSlot--;
			};
		}
	};
	cL = /* @__PURE__ */ new WeakMap();
	c$ = (e, t) => function() {
		let n, r, i, l, s;
		if (1 !== (e = t.currentNode).type || 0 !== e.tagType && 1 !== e.tagType) return;
		let { tag: o, props: a } = e, c = 1 === e.tagType, u = c ? function(e, t, n = !1) {
			let { tag: r } = e, i = cj(r), l = aR(e, "is", !1, !0);
			if (l) if (i) {
				let e;
				if (6 === l.type ? e = l.value && ai(l.value.content, !0) : (e = l.exp) || (e = ai("is", !1, l.arg.loc)), e) return as(t.helper(oL), [e]);
			} else 6 === l.type && l.value.content.startsWith("vue:") && (r = l.value.content.slice(4));
			let s = aS(r) || t.isBuiltInComponent(r);
			return s ? (n || t.helper(s), s) : (t.helper(oD), t.components.add(r), aj(r, "component"));
		}(e, t) : `"${o}"`, d = E(u) && u.callee === oL, p = 0, h = !1, f = !1, g = d || u === ok || u === oT || !c && ("svg" === o || "foreignObject" === o || "math" === o);
		if (a.length > 0) {
			let r = cV(e, t, void 0, c, d);
			n = r.props, p = r.patchFlag, l = r.dynamicPropNames, h = r.needsPatch, f = r.isBlockRequired;
			let i = r.directives;
			s = i && i.length ? at(i.map((e) => (function(e, t) {
				let n = [], r = cL.get(e);
				r ? n.push(t.helperString(r)) : (t.helper(o$), t.directives.add(e.name), n.push(aj(e.name, "directive")));
				let { loc: i } = e;
				if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
					e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
					let t = ai("true", !1, i);
					n.push(an(e.modifiers.map((e) => ar(e, t)), i));
				}
				return at(n, e.loc);
			})(e, t))) : void 0, r.shouldUseBlock && (g = !0);
		}
		if (e.children.length > 0) if (u === ow && (g = !0, p |= 1024), c && u !== ok && u !== ow) {
			let { slots: n, hasDynamicSlots: i } = function(e, t, n = (e, t, n, r) => ao(e, n, !1, !0, n.length ? n[0].loc : r)) {
				t.helper(o3);
				let { children: r, loc: i } = e, l = [], s = [], o = t.scopes.vSlot > 0 || t.scopes.vFor > 0, a = aE(e, "slot", !0);
				if (a) {
					let { arg: e, exp: t } = a;
					e && !ab(e) && (o = !0), l.push(ar(e || ai("default", !0), n(t, void 0, r, i)));
				}
				let c = !1, u = !1, d = [], p = /* @__PURE__ */ new Set(), h = 0;
				for (let e = 0; e < r.length; e++) {
					let i, f, g, m, y = r[e];
					if (!aF(y) || !(i = aE(y, "slot", !0))) {
						3 !== y.type && d.push(y);
						continue;
					}
					if (a) {
						t.onError(a_(37, i.loc));
						break;
					}
					c = !0;
					let { children: _, loc: b } = y, { arg: S = ai("default", !0), exp: x, loc: C } = i;
					ab(S) ? f = S ? S.content : "default" : o = !0;
					let k = aE(y, "for"), T = n(x, k, _, b);
					if (g = aE(y, "if")) o = !0, s.push(aa(g.exp, cD(S, T, h++), cM));
					else if (m = aE(y, /^else(?:-if)?$/, !0)) {
						let n, i = e;
						for (; i-- && aW(n = r[i]););
						if (n && aF(n) && aE(n, /^(?:else-)?if$/)) {
							let e = s[s.length - 1];
							for (; 19 === e.alternate.type;) e = e.alternate;
							e.alternate = m.exp ? aa(m.exp, cD(S, T, h++), cM) : cD(S, T, h++);
						} else t.onError(a_(30, m.loc));
					} else if (k) {
						o = !0;
						let e = k.forParseResult;
						e ? (cO(e), s.push(as(t.helper(oj), [e.source, ao(cP(e), cD(S, T), !0)]))) : t.onError(a_(32, k.loc));
					} else {
						if (f) {
							if (p.has(f)) {
								t.onError(a_(38, C));
								continue;
							}
							p.add(f), "default" === f && (u = !0);
						}
						l.push(ar(S, T));
					}
				}
				if (!a) {
					let e = (e, t) => ar("default", n(e, void 0, t, i));
					c ? d.length && !d.every(aq) && (u ? t.onError(a_(39, d[0].loc)) : l.push(e(void 0, d))) : l.push(e(void 0, r));
				}
				let f = o ? 2 : !function e(t) {
					for (let n = 0; n < t.length; n++) {
						let r = t[n];
						switch (r.type) {
							case 1:
								if (2 === r.tagType || e(r.children)) return !0;
								break;
							case 9:
								if (e(r.branches)) return !0;
								break;
							case 10:
							case 11: if (e(r.children)) return !0;
						}
					}
					return !1;
				}(e.children) ? 1 : 3, g = an(l.concat(ar("_", ai(f + "", !1))), i);
				return s.length && (g = as(t.helper(oH), [g, at(s)])), {
					slots: g,
					hasDynamicSlots: o
				};
			}(e, t);
			r = n, i && (p |= 1024);
		} else if (1 === e.children.length && u !== ok) {
			let n = e.children[0], i = n.type, l = 5 === i || 8 === i;
			l && 0 === ch(n, t) && (p |= 1), r = l || 2 === i ? n : e.children;
		} else r = e.children;
		l && l.length && (i = function(e) {
			let t = "[";
			for (let n = 0, r = e.length; n < r; n++) t += JSON.stringify(e[n]), n < r - 1 && (t += ", ");
			return t + "]";
		}(l));
		let m = e.codegenNode = ae(t, u, n, r, 0 === p ? void 0 : p, i, s, !!g, !1, c, e.loc);
		(h = h && (0 === p || 32 === p)) && (m.needsPatch = !0), f && (m.isBlockRequired = !0);
	};
	cU = (e, t) => {
		if (aD(e)) {
			let { children: n, loc: r } = e, { slotName: i, slotProps: l } = function(e, t) {
				let n, r = "\"default\"", i = [];
				for (let t = 0; t < e.props.length; t++) {
					let n = e.props[t];
					if (6 === n.type) n.value && ("name" === n.name ? r = JSON.stringify(n.value.content) : (n.name = L(n.name), i.push(n)));
					else if ("bind" === n.name && aI(n.arg, "name")) {
						if (n.exp) r = n.exp;
						else if (n.arg && 4 === n.arg.type) r = n.exp = ai(L(n.arg.content), !1, n.arg.loc);
					} else "bind" === n.name && n.arg && ab(n.arg) && (n.arg.content = L(n.arg.content)), i.push(n);
				}
				if (i.length > 0) {
					let { props: r, directives: l } = cV(e, t, i, !1, !1);
					n = r, l.length && t.onError(a_(36, l[0].loc));
				}
				return {
					slotName: r,
					slotProps: n
				};
			}(e, t), s = [
				t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
				i,
				"{}",
				"undefined",
				"true"
			], o = 2;
			l && (s[2] = l, o = 3), n.length && (s[3] = ao([], n, !1, !1, r), o = 4), t.scopeId && !t.slotted && (o = 5), s.splice(o), e.codegenNode = as(t.helper(oU), s, r);
		}
	};
	cH = (e, t, n, r) => {
		let i, { loc: l, modifiers: s, arg: o } = e;
		if (!e.exp && s.length, 4 === o.type) if (o.isStatic) {
			let e = o.content;
			e.startsWith("vue:") && (e = `vnode-${e.slice(4)}`), i = ai(0 !== t.tagType || e.startsWith("vnode") || !/[A-Z]/.test(e) ? j(L(e)) : `on:${e}`, !0, o.loc);
		} else i = al([
			`${n.helperString(oY)}(`,
			o,
			")"
		]);
		else (i = o).children.unshift(`${n.helperString(oY)}(`), i.children.push(")");
		let a = e.exp;
		a && !a.content.trim() && (a = void 0);
		let c = n.cacheHandlers && !a && !n.inVOnce;
		if (a) {
			let e, t = aN(a), n = !(t || (e = a, aA.test(aw(e)))), r = a.content.includes(";");
			(n || c && t) && (a = al([
				`${n ? "$event" : "(...args)"} => ${r ? "{" : "("}`,
				a,
				r ? "}" : ")"
			]));
		}
		let u = { props: [ar(i, a || ai("() => {}", !1, l))] };
		return r && (u = r(u)), c && (u.props[0].value = n.cache(u.props[0].value)), u.props.forEach((e) => e.key.isHandlerKey = !0), u;
	};
	cq = (e, t, n) => {
		let { modifiers: r } = e, i = e.arg, { exp: l } = e;
		return l && 4 === l.type && !l.content.trim() && (l = void 0), 4 !== i.type ? (i.children.unshift("("), i.children.push(") || \"\"")) : i.isStatic || (i.content = i.content ? `${i.content} || ""` : "\"\""), r.some((e) => "camel" === e.content) && (4 === i.type ? i.isStatic ? i.content = L(i.content) : i.content = `${n.helperString(oQ)}(${i.content})` : (i.children.unshift(`${n.helperString(oQ)}(`), i.children.push(")"))), !n.inSSR && (r.some((e) => "prop" === e.content) && cW(i, "."), r.some((e) => "attr" === e.content) && cW(i, "^")), { props: [ar(i, l)] };
	};
	cW = (e, t) => {
		4 === e.type ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
	};
	cK = (e, t) => {
		if (0 === e.type || 1 === e.type || 11 === e.type || 10 === e.type) return () => {
			let n, r = e.children, i = !1;
			for (let e = 0; e < r.length; e++) {
				let t = r[e];
				if (aO(t)) {
					i = !0;
					for (let i = e + 1; i < r.length; i++) {
						let l = r[i];
						if (aO(l)) n || (n = r[e] = al([t], t.loc)), n.children.push(" + ", l), r.splice(i, 1), i--;
						else {
							n = void 0;
							break;
						}
					}
				}
			}
			if (i && (1 !== r.length || 0 !== e.type && (1 !== e.type || 0 !== e.tagType || e.props.find((e) => 7 === e.type && !t.directiveTransforms[e.name])))) for (let e = 0; e < r.length; e++) {
				let n = r[e];
				if (aO(n) || 8 === n.type) {
					let i = [];
					(2 !== n.type || " " !== n.content) && i.push(n), t.ssr || 0 !== ch(n, t) || i.push("1"), r[e] = {
						type: 12,
						content: n,
						loc: n.loc,
						codegenNode: as(t.helper(oM), i)
					};
				}
			}
		};
	};
	cz = /* @__PURE__ */ new WeakSet();
	cJ = (e, t) => {
		if (1 === e.type && aE(e, "once", !0) && !cz.has(e) && !t.inVOnce && !t.inSSR) return cz.add(e), t.inVOnce = !0, t.helper(o0), () => {
			t.inVOnce = !1;
			let e = t.currentNode;
			e.codegenNode && (e.codegenNode = t.cache(e.codegenNode, !0, !0));
		};
	};
	cG = (e, t, n) => {
		let r, { exp: i, arg: l } = e;
		if (!i) return n.onError(a_(41, e.loc)), cX();
		let s = i.loc.source.trim(), o = 4 === i.type ? i.content : s, a = n.bindingMetadata[s];
		if ("props" === a || "props-aliased" === a || "literal-const" === a || "setup-const" === a) return i.loc, cX();
		if (!o.trim() || !aN(i)) return n.onError(a_(42, i.loc)), cX();
		let c = l || ai("modelValue", !0), u = l ? ab(l) ? `onUpdate:${L(l.content)}` : al(["\"onUpdate:\" + ", l]) : "onUpdate:modelValue";
		r = al([
			`${n.isTS ? "($event: any)" : "$event"} => ((`,
			i,
			") = $event)"
		]);
		let p = [ar(c, e.exp), ar(u, r)];
		if (e.modifiers.length && 1 === t.tagType) {
			let t = e.modifiers.map((e) => e.content).map((e) => (ax.test(e) ? JSON.stringify(e) : e) + ": true").join(", "), n = l ? ab(l) ? `${l.content}Modifiers` : al([l, " + \"Modifiers\""]) : "modelModifiers";
			p.push(ar(n, ai(`{ ${t} }`, !1, e.loc, 2)));
		}
		return cX(p);
	};
	cQ = /* @__PURE__ */ new WeakSet();
	cZ = (e, t) => {
		if (1 === e.type) {
			let n = aE(e, "memo");
			if (!(!n || cQ.has(e)) && !t.inSSR) return cQ.add(e), () => {
				let r = e.codegenNode || t.currentNode.codegenNode;
				r && 13 === r.type && (1 !== e.tagType && ac(r, t), e.codegenNode = as(t.helper(o8), [
					n.exp,
					ao(void 0, r),
					"_cache",
					String(t.cached.length)
				]), t.cached.push(null));
			};
		}
	};
	cY = (e, t) => {
		if (1 === e.type) {
			for (let n of e.props) if (7 === n.type && "bind" === n.name && (!n.exp || 4 === n.exp.type && !n.exp.content.trim()) && n.arg) {
				let e = n.arg;
				if (4 === e.type && e.isStatic) {
					let t = L(e.content);
					(aC.test(t[0]) || "-" === t[0]) && (n.exp = ai(t, !1, e.loc));
				} else t.onError(a_(53, e.loc)), n.exp = ai("", !0, e.loc);
			}
		}
	};
	c0 = Symbol("");
	c1 = Symbol("");
	c2 = Symbol("");
	c3 = Symbol("");
	c6 = Symbol("");
	c4 = Symbol("");
	c8 = Symbol("");
	c5 = Symbol("");
	c9 = Symbol("");
	c7 = Symbol("");
	Object.getOwnPropertySymbols(oS = {
		[c0]: "vModelRadio",
		[c1]: "vModelCheckbox",
		[c2]: "vModelText",
		[c3]: "vModelSelect",
		[c6]: "vModelDynamic",
		[c4]: "withModifiers",
		[c8]: "withKeys",
		[c5]: "vShow",
		[c9]: "Transition",
		[c7]: "TransitionGroup"
	}).forEach((e) => {
		o9[e] = oS[e];
	});
	ue = {
		parseMode: "html",
		isVoidTag: el,
		isNativeTag: (e) => en(e) || er(e) || ei(e),
		isPreTag: (e) => "pre" === e,
		isIgnoreNewlineTag: (e) => "pre" === e || "textarea" === e,
		decodeEntities: function(e, t = !1) {
			return (u || (u = document.createElement("div")), t) ? (u.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, u.children[0].getAttribute("foo")) : (u.innerHTML = e, u.textContent);
		},
		isBuiltInComponent: (e) => "Transition" === e || "transition" === e ? c9 : "TransitionGroup" === e || "transition-group" === e ? c7 : void 0,
		getNamespace(e, t, n) {
			let r = t ? t.ns : n;
			if (t && 2 === r) if ("annotation-xml" === t.tag) {
				if ("svg" === e) return 1;
				t.props.some((e) => 6 === e.type && "encoding" === e.name && null != e.value && ("text/html" === e.value.content || "application/xhtml+xml" === e.value.content)) && (r = 0);
			} else /^m(?:[ions]|text)$/.test(t.tag) && "mglyph" !== e && "malignmark" !== e && (r = 0);
			else t && 1 === r && ("foreignObject" === t.tag || "desc" === t.tag || "title" === t.tag) && (r = 0);
			if (0 === r) {
				if ("svg" === e) return 1;
				if ("math" === e) return 2;
			}
			return r;
		}
	};
	ut = h("passive,once,capture");
	un = h("stop,prevent,self,ctrl,shift,alt,meta,exact,middle");
	ur = h("left,right");
	ui = h("onkeyup,onkeydown,onkeypress");
	ul = (e, t) => ab(e) && "onclick" === e.content.toLowerCase() ? ai(t, !0) : 4 !== e.type ? al([
		"(",
		e,
		`) === "onClick" ? "${t}" : (`,
		e,
		")"
	]) : e;
	us = (e, t) => {
		1 === e.type && 0 === e.tagType && ("script" === e.tag || "style" === e.tag) && t.removeNode();
	};
	uo = [(e) => {
		1 === e.type && e.props.forEach((t, n) => {
			let r, i;
			6 === t.type && "style" === t.name && t.value && (e.props[n] = {
				type: 7,
				name: "bind",
				arg: ai("style", !0, t.loc),
				exp: (r = t.value.content, i = t.loc, ai(JSON.stringify(Y(r)), !1, i, 3)),
				modifiers: [],
				loc: t.loc
			});
		});
	}];
	ua = {
		cloak: () => ({ props: [] }),
		html: (e, t, n) => {
			let { exp: r, loc: i } = e;
			return r || n.onError(a_(54, i)), t.children.length && (n.onError(a_(55, i)), t.children.length = 0), { props: [ar(ai("innerHTML", !0, i), r || ai("", !0))] };
		},
		text: (e, t, n) => {
			let { exp: r, loc: i } = e;
			return r || n.onError(a_(56, i)), t.children.length && (n.onError(a_(57, i)), t.children.length = 0), { props: [ar(ai("textContent", !0), r ? ch(r, n) > 0 ? r : as(n.helperString(oq), [r], i) : ai("", !0))] };
		},
		model: (e, t, n) => {
			let r = cG(e, t, n);
			if (!r.props.length || 1 === t.tagType) return r;
			e.arg && n.onError(a_(59, e.arg.loc));
			let { tag: i } = t, l = n.isCustomElement(i);
			if ("input" === i || "textarea" === i || "select" === i || l) {
				let s = c2, o = !1;
				if ("input" === i || l) {
					let r = aR(t, "type");
					if (r) {
						if (7 === r.type) s = c6;
						else if (r.value) switch (r.value.content) {
							case "radio":
								s = c0;
								break;
							case "checkbox":
								s = c1;
								break;
							case "file": o = !0, n.onError(a_(60, e.loc));
						}
					} else t.props.some((e) => 7 === e.type && "bind" === e.name && (!e.arg || 4 !== e.arg.type || !e.arg.isStatic)) && (s = c6);
				} else "select" === i && (s = c3);
				o || (r.needRuntime = n.helper(s));
			} else n.onError(a_(58, e.loc));
			return r.props = r.props.filter((e) => 4 !== e.key.type || "modelValue" !== e.key.content), r;
		},
		on: (e, t, n) => cH(e, t, n, (t) => {
			let { modifiers: r } = e;
			if (!r.length) return t;
			let { key: i, value: l } = t.props[0], { keyModifiers: s, nonKeyModifiers: o, eventOptionModifiers: a } = ((e, t, n) => {
				let r = [], i = [], l = [];
				for (let n = 0; n < t.length; n++) {
					let s = t[n].content;
					ut(s) ? l.push(s) : ur(s) ? ab(e) ? ui(e.content.toLowerCase()) ? r.push(s) : i.push(s) : (r.push(s), i.push(s)) : un(s) ? i.push(s) : r.push(s);
				}
				return {
					keyModifiers: r,
					nonKeyModifiers: i,
					eventOptionModifiers: l
				};
			})(i, r, e.loc);
			if (o.includes("right") && (i = ul(i, "onContextmenu")), o.includes("middle") && (i = ul(i, "onMouseup")), o.length && (l = as(n.helper(c4), [l, JSON.stringify(o)])), s.length && (!ab(i) || ui(i.content.toLowerCase())) && (l = as(n.helper(c8), [l, JSON.stringify(s)])), a.length) {
				let e = a.map(B).join("");
				i = ab(i) ? ai(`${i.content}${e}`, !0) : al([
					"(",
					i,
					`) + "${e}"`
				]);
			}
			return { props: [ar(i, l)] };
		}),
		show: (e, t, n) => {
			let { exp: r, loc: i } = e;
			return r || n.onError(a_(62, i)), {
				props: [],
				needRuntime: n.helper(c5)
			};
		}
	};
	uc = Object.create(null);
	lR(uu);
}));
//#endregion
//#region node_modules/file-saver/dist/FileSaver.min.js
var require_FileSaver_min = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(a, b) {
		if ("function" == typeof define && define.amd) define([], b);
		else if ("undefined" != typeof exports) b();
		else b(), a.FileSaver = { exports: {} }.exports;
	})(exports, function() {
		"use strict";
		function b(a, b) {
			return "undefined" == typeof b ? b = { autoBom: !1 } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = { autoBom: !b }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["﻿", a], { type: a.type }) : a;
		}
		function c(a, b, c) {
			var d = new XMLHttpRequest();
			d.open("GET", a), d.responseType = "blob", d.onload = function() {
				g(d.response, b, c);
			}, d.onerror = function() {
				console.error("could not download file");
			}, d.send();
		}
		function d(a) {
			var b = new XMLHttpRequest();
			b.open("HEAD", a, !1);
			try {
				b.send();
			} catch (a) {}
			return 200 <= b.status && 299 >= b.status;
		}
		function e(a) {
			try {
				a.dispatchEvent(new MouseEvent("click"));
			} catch (c) {
				var b = document.createEvent("MouseEvents");
				b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
			}
		}
		var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {} : "download" in HTMLAnchorElement.prototype && !a ? function(b, g, h) {
			var i = f.URL || f.webkitURL, j = document.createElement("a");
			g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function() {
				i.revokeObjectURL(j.href);
			}, 4e4), setTimeout(function() {
				e(j);
			}, 0));
		} : "msSaveOrOpenBlob" in navigator ? function(f, g, h) {
			if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);
			else if (d(f)) c(f, g, h);
			else {
				var i = document.createElement("a");
				i.href = f, i.target = "_blank", setTimeout(function() {
					e(i);
				});
			}
		} : function(b, d, e, g) {
			if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
			var h = "application/octet-stream" === b.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
			if ((j || h && i || a) && "undefined" != typeof FileReader) {
				var k = new FileReader();
				k.onloadend = function() {
					var a = k.result;
					a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
				}, k.readAsDataURL(b);
			} else {
				var l = f.URL || f.webkitURL, m = l.createObjectURL(b);
				g ? g.location = m : location.href = m, g = null, setTimeout(function() {
					l.revokeObjectURL(m);
				}, 4e4);
			}
		});
		f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g);
	});
}));
//#endregion
//#region score-display/loaders/webmscore.js
async function ensure_webmscore() {
	if (WebMscore !== void 0) return await WebMscore.ready;
	WebMscore = (await import(LIB_WEBMSCORE)).default;
	await WebMscore.ready;
}
var LIB_WEBMSCORE, LIB_WEBMSCORE_MAJOR, WebMscoreSupported, WebMscore, WebMscoreLoader;
var init_webmscore$1 = __esmMin((() => {
	LIB_WEBMSCORE = "./webmscore/webmscore.mjs";
	LIB_WEBMSCORE_MAJOR = ((ver) => ver.substr("", ver.lastIndexOf(".")))(LIB_WEBMSCORE_VERSION);
	WebMscoreSupported = [
		"gp",
		"gpx",
		"gp5",
		"gp4",
		"gp3",
		"musicxml",
		"xml",
		"mxl",
		"mid",
		"midi",
		"kar",
		"mscz",
		"mscx",
		"cap",
		"capx",
		"mgu",
		"sgu",
		"ove",
		"scw",
		"mei",
		"ptb",
		"bww",
		"md"
	];
	WebMscoreLoader = class {
		constructor(src, type) {
			this.src = src;
			this.type = type;
			this.score = this.load_score();
		}
		async load_score() {
			await ensure_webmscore();
			return fetch(this.src).then((data) => data.arrayBuffer()).then((filedata) => WebMscore.load(this.type, new Uint8Array(filedata)));
		}
		async loadMetaData() {
			return await (await this.score).metadata();
		}
		/** Load measures positions, set savePositions=true to load each note event position */
		async loadPos(savePositions) {
			let posRaw = await (await this.score).savePositions(savePositions);
			let json_data = JSON.parse(posRaw);
			const minWidth = 64;
			let element_transform = ((el, index, elements) => {
				let width = el.sx;
				if (width === 0 && elements && index < elements.length - 1) {
					const next = elements[index + 1];
					if (next && next.x > el.x && next.y == el.y) width = next.x - el.x;
				}
				return {
					elid: el.id,
					pos: [el.x, el.y],
					size: [Math.max(width, minWidth), el.sy],
					page: +el.page
				};
			});
			let event_transform = (evt) => ({
				elid: evt.elid,
				time: evt.position / 1e3
			});
			const events = [];
			json_data.events.forEach((e) => {
				events[e.elid] = event_transform(e);
			});
			return {
				elements: json_data.elements.map(element_transform),
				events
			};
		}
		async loadGraphics(count) {
			let score = await this.score;
			let graphics = Array(count).fill(null);
			for (let i = 0; i < graphics.length; i++) graphics[i] = await score.saveSvg(i, false);
			return graphics;
		}
		async setSoundFont() {
			let score = await this.score;
			const soundFontData = new Uint8Array(await (await fetch(import.meta.url.substr(0, import.meta.url.lastIndexOf("/")) + "/soundfonts/FluidR3Mono_GM.sf3")).arrayBuffer());
			await score.setSoundFont(soundFontData);
		}
		async synthAudio(start_time) {
			let score = await this.score;
			await this.setSoundFont();
			return await score.synthAudio(start_time);
		}
		async exportAs(format) {
			let score = await this.score;
			if (format == "mscz") return score.saveMsc("mscz");
			if (format == "musicxml") return score.saveXml();
			if (format == "pdf") return score.savePdf();
			if (format == "mxl") return score.saveMxl();
			if (format == "mid") return score.saveMidi();
			if (format == "ogg") return score.saveAudio("ogg");
			throw `Unknown download format ${format}`;
		}
		async destroy() {
			(await this.score).destroy(false);
		}
	};
}));
//#endregion
//#region score-display/loaders/wd_data.js
var WdDataLoader;
var init_wd_data = __esmMin((() => {
	WdDataLoader = class {
		constructor(src) {
			this.src = src;
		}
		async loadMetaData() {
			return await (await fetch(this.src + "/meta.metajson")).json();
		}
		/** Load measures positions, set savePositions=true to load each note event position */
		async loadPos(savePositions) {
			if (savePositions) console.warn("Attempting to load positions with savePositions=true for a wd-data score");
			const response = await fetch(this.src + "/measures.mpos");
			const mposXml = new DOMParser().parseFromString(await response.text() ?? "<none />", "application/xml");
			const event_items = mposXml.querySelectorAll("event");
			const events = [];
			for (let i = 0; i < event_items.length; i++) {
				const item = event_items[i];
				events.push({
					elid: Number(item.getAttribute("elid")),
					time: item.getAttribute("position") / 1e3
				});
			}
			const posScale = 12;
			const element_items = mposXml.querySelectorAll("element");
			const elements = {};
			for (let i = 0; i < element_items.length; i++) {
				const item = element_items[i];
				const element = {
					elid: item.getAttribute("id"),
					pos: [item.getAttribute("x") / posScale, item.getAttribute("y") / posScale],
					size: [item.getAttribute("sx") / posScale, item.getAttribute("sy") / posScale],
					page: +item.getAttribute("page")
				};
				const minWidth = 64;
				if (element.size[0] < minWidth) element.size[0] = minWidth;
				elements[item.getAttribute("id")] = element;
			}
			return {
				"events": events,
				"elements": elements
			};
		}
		async _loadPage(pageId) {
			const url = this.src + `/graphic-${pageId + 1}.svg`;
			return await (await fetch(url)).text();
		}
		async loadGraphics(count) {
			let graphics = Array(count).fill(null);
			for (let i = 0; i < graphics.length; i++) graphics[i] = await this._loadPage(i);
			return graphics;
		}
		async exportAs(format) {
			throw "WdDataLoader can't generate an export.";
		}
		async destroy() {}
	};
}));
//#endregion
//#region score-display/utils.js
function useFrameEffect(func) {
	return nm((cleanup) => {
		let sustain = true;
		function adjust() {
			func();
			if (sustain) requestAnimationFrame(adjust);
		}
		requestAnimationFrame(adjust);
		cleanup(() => {
			sustain = false;
		});
	});
}
var init_utils = __esmMin((() => {
	init_vue_esm_browser_prod();
}));
//#endregion
//#region node_modules/howler/dist/howler.js
var require_howler = /* @__PURE__ */ __commonJSMin(((exports) => {
	/*!
	*  howler.js v2.2.4
	*  howlerjs.com
	*
	*  (c) 2013-2020, James Simpson of GoldFire Studios
	*  goldfirestudios.com
	*
	*  MIT License
	*/
	(function() {
		"use strict";
		/** Global Methods **/
		/**
		* Create the global controller. All contained methods and properties apply
		* to all sounds that are currently playing or will be in the future.
		*/
		var HowlerGlobal = function() {
			this.init();
		};
		HowlerGlobal.prototype = {
			/**
			* Initialize the global Howler object.
			* @return {Howler}
			*/
			init: function() {
				var self = this || Howler;
				self._counter = 1e3;
				self._html5AudioPool = [];
				self.html5PoolSize = 10;
				self._codecs = {};
				self._howls = [];
				self._muted = false;
				self._volume = 1;
				self._canPlayEvent = "canplaythrough";
				self._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
				self.masterGain = null;
				self.noAudio = false;
				self.usingWebAudio = true;
				self.autoSuspend = true;
				self.ctx = null;
				self.autoUnlock = true;
				self._setup();
				return self;
			},
			/**
			* Get/set the global volume for all sounds.
			* @param  {Float} vol Volume from 0.0 to 1.0.
			* @return {Howler/Float}     Returns self or current volume.
			*/
			volume: function(vol) {
				var self = this || Howler;
				vol = parseFloat(vol);
				if (!self.ctx) setupAudioContext();
				if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
					self._volume = vol;
					if (self._muted) return self;
					if (self.usingWebAudio) self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
					for (var i = 0; i < self._howls.length; i++) if (!self._howls[i]._webAudio) {
						var ids = self._howls[i]._getSoundIds();
						for (var j = 0; j < ids.length; j++) {
							var sound = self._howls[i]._soundById(ids[j]);
							if (sound && sound._node) sound._node.volume = sound._volume * vol;
						}
					}
					return self;
				}
				return self._volume;
			},
			/**
			* Handle muting and unmuting globally.
			* @param  {Boolean} muted Is muted or not.
			*/
			mute: function(muted) {
				var self = this || Howler;
				if (!self.ctx) setupAudioContext();
				self._muted = muted;
				if (self.usingWebAudio) self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
				for (var i = 0; i < self._howls.length; i++) if (!self._howls[i]._webAudio) {
					var ids = self._howls[i]._getSoundIds();
					for (var j = 0; j < ids.length; j++) {
						var sound = self._howls[i]._soundById(ids[j]);
						if (sound && sound._node) sound._node.muted = muted ? true : sound._muted;
					}
				}
				return self;
			},
			/**
			* Handle stopping all sounds globally.
			*/
			stop: function() {
				var self = this || Howler;
				for (var i = 0; i < self._howls.length; i++) self._howls[i].stop();
				return self;
			},
			/**
			* Unload and destroy all currently loaded Howl objects.
			* @return {Howler}
			*/
			unload: function() {
				var self = this || Howler;
				for (var i = self._howls.length - 1; i >= 0; i--) self._howls[i].unload();
				if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== "undefined") {
					self.ctx.close();
					self.ctx = null;
					setupAudioContext();
				}
				return self;
			},
			/**
			* Check for codec support of specific extension.
			* @param  {String} ext Audio file extention.
			* @return {Boolean}
			*/
			codecs: function(ext) {
				return (this || Howler)._codecs[ext.replace(/^x-/, "")];
			},
			/**
			* Setup various state values for global tracking.
			* @return {Howler}
			*/
			_setup: function() {
				var self = this || Howler;
				self.state = self.ctx ? self.ctx.state || "suspended" : "suspended";
				self._autoSuspend();
				if (!self.usingWebAudio) {
					if (typeof Audio !== "undefined") try {
						var test = new Audio();
						if (typeof test.oncanplaythrough === "undefined") self._canPlayEvent = "canplay";
					} catch (e) {
						self.noAudio = true;
					}
					else self.noAudio = true;
				}
				try {
					var test = new Audio();
					if (test.muted) self.noAudio = true;
				} catch (e) {}
				if (!self.noAudio) self._setupCodecs();
				return self;
			},
			/**
			* Check for browser support for various codecs and cache the results.
			* @return {Howler}
			*/
			_setupCodecs: function() {
				var self = this || Howler;
				var audioTest = null;
				try {
					audioTest = typeof Audio !== "undefined" ? new Audio() : null;
				} catch (err) {
					return self;
				}
				if (!audioTest || typeof audioTest.canPlayType !== "function") return self;
				var mpegTest = audioTest.canPlayType("audio/mpeg;").replace(/^no$/, "");
				var ua = self._navigator ? self._navigator.userAgent : "";
				var checkOpera = ua.match(/OPR\/(\d+)/g);
				var isOldOpera = checkOpera && parseInt(checkOpera[0].split("/")[1], 10) < 33;
				var checkSafari = ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1;
				var safariVersion = ua.match(/Version\/(.*?) /);
				var isOldSafari = checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15;
				self._codecs = {
					mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType("audio/mp3;").replace(/^no$/, ""))),
					mpeg: !!mpegTest,
					opus: !!audioTest.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
					ogg: !!audioTest.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
					oga: !!audioTest.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
					wav: !!(audioTest.canPlayType("audio/wav; codecs=\"1\"") || audioTest.canPlayType("audio/wav")).replace(/^no$/, ""),
					aac: !!audioTest.canPlayType("audio/aac;").replace(/^no$/, ""),
					caf: !!audioTest.canPlayType("audio/x-caf;").replace(/^no$/, ""),
					m4a: !!(audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/m4a;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
					m4b: !!(audioTest.canPlayType("audio/x-m4b;") || audioTest.canPlayType("audio/m4b;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
					mp4: !!(audioTest.canPlayType("audio/x-mp4;") || audioTest.canPlayType("audio/mp4;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
					weba: !!(!isOldSafari && audioTest.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, "")),
					webm: !!(!isOldSafari && audioTest.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, "")),
					dolby: !!audioTest.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
					flac: !!(audioTest.canPlayType("audio/x-flac;") || audioTest.canPlayType("audio/flac;")).replace(/^no$/, "")
				};
				return self;
			},
			/**
			* Some browsers/devices will only allow audio to be played after a user interaction.
			* Attempt to automatically unlock audio on the first user interaction.
			* Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
			* @return {Howler}
			*/
			_unlockAudio: function() {
				var self = this || Howler;
				if (self._audioUnlocked || !self.ctx) return;
				self._audioUnlocked = false;
				self.autoUnlock = false;
				if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
					self._mobileUnloaded = true;
					self.unload();
				}
				self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
				var unlock = function(e) {
					while (self._html5AudioPool.length < self.html5PoolSize) try {
						var audioNode = new Audio();
						audioNode._unlocked = true;
						self._releaseHtml5Audio(audioNode);
					} catch (e) {
						self.noAudio = true;
						break;
					}
					for (var i = 0; i < self._howls.length; i++) if (!self._howls[i]._webAudio) {
						var ids = self._howls[i]._getSoundIds();
						for (var j = 0; j < ids.length; j++) {
							var sound = self._howls[i]._soundById(ids[j]);
							if (sound && sound._node && !sound._node._unlocked) {
								sound._node._unlocked = true;
								sound._node.load();
							}
						}
					}
					self._autoResume();
					var source = self.ctx.createBufferSource();
					source.buffer = self._scratchBuffer;
					source.connect(self.ctx.destination);
					if (typeof source.start === "undefined") source.noteOn(0);
					else source.start(0);
					if (typeof self.ctx.resume === "function") self.ctx.resume();
					source.onended = function() {
						source.disconnect(0);
						self._audioUnlocked = true;
						document.removeEventListener("touchstart", unlock, true);
						document.removeEventListener("touchend", unlock, true);
						document.removeEventListener("click", unlock, true);
						document.removeEventListener("keydown", unlock, true);
						for (var i = 0; i < self._howls.length; i++) self._howls[i]._emit("unlock");
					};
				};
				document.addEventListener("touchstart", unlock, true);
				document.addEventListener("touchend", unlock, true);
				document.addEventListener("click", unlock, true);
				document.addEventListener("keydown", unlock, true);
				return self;
			},
			/**
			* Get an unlocked HTML5 Audio object from the pool. If none are left,
			* return a new Audio object and throw a warning.
			* @return {Audio} HTML5 Audio object.
			*/
			_obtainHtml5Audio: function() {
				var self = this || Howler;
				if (self._html5AudioPool.length) return self._html5AudioPool.pop();
				var testPlay = new Audio().play();
				if (testPlay && typeof Promise !== "undefined" && (testPlay instanceof Promise || typeof testPlay.then === "function")) testPlay.catch(function() {
					console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
				});
				return new Audio();
			},
			/**
			* Return an activated HTML5 Audio object to the pool.
			* @return {Howler}
			*/
			_releaseHtml5Audio: function(audio) {
				var self = this || Howler;
				if (audio._unlocked) self._html5AudioPool.push(audio);
				return self;
			},
			/**
			* Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
			* This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
			* @return {Howler}
			*/
			_autoSuspend: function() {
				var self = this;
				if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === "undefined" || !Howler.usingWebAudio) return;
				for (var i = 0; i < self._howls.length; i++) if (self._howls[i]._webAudio) {
					for (var j = 0; j < self._howls[i]._sounds.length; j++) if (!self._howls[i]._sounds[j]._paused) return self;
				}
				if (self._suspendTimer) clearTimeout(self._suspendTimer);
				self._suspendTimer = setTimeout(function() {
					if (!self.autoSuspend) return;
					self._suspendTimer = null;
					self.state = "suspending";
					var handleSuspension = function() {
						self.state = "suspended";
						if (self._resumeAfterSuspend) {
							delete self._resumeAfterSuspend;
							self._autoResume();
						}
					};
					self.ctx.suspend().then(handleSuspension, handleSuspension);
				}, 3e4);
				return self;
			},
			/**
			* Automatically resume the Web Audio AudioContext when a new sound is played.
			* @return {Howler}
			*/
			_autoResume: function() {
				var self = this;
				if (!self.ctx || typeof self.ctx.resume === "undefined" || !Howler.usingWebAudio) return;
				if (self.state === "running" && self.ctx.state !== "interrupted" && self._suspendTimer) {
					clearTimeout(self._suspendTimer);
					self._suspendTimer = null;
				} else if (self.state === "suspended" || self.state === "running" && self.ctx.state === "interrupted") {
					self.ctx.resume().then(function() {
						self.state = "running";
						for (var i = 0; i < self._howls.length; i++) self._howls[i]._emit("resume");
					});
					if (self._suspendTimer) {
						clearTimeout(self._suspendTimer);
						self._suspendTimer = null;
					}
				} else if (self.state === "suspending") self._resumeAfterSuspend = true;
				return self;
			}
		};
		var Howler = new HowlerGlobal();
		/** Group Methods **/
		/**
		* Create an audio group controller.
		* @param {Object} o Passed in properties for this group.
		*/
		var Howl = function(o) {
			var self = this;
			if (!o.src || o.src.length === 0) {
				console.error("An array of source files must be passed with any new Howl.");
				return;
			}
			self.init(o);
		};
		Howl.prototype = {
			/**
			* Initialize a new Howl group object.
			* @param  {Object} o Passed in properties for this group.
			* @return {Howl}
			*/
			init: function(o) {
				var self = this;
				if (!Howler.ctx) setupAudioContext();
				self._autoplay = o.autoplay || false;
				self._format = typeof o.format !== "string" ? o.format : [o.format];
				self._html5 = o.html5 || false;
				self._muted = o.mute || false;
				self._loop = o.loop || false;
				self._pool = o.pool || 5;
				self._preload = typeof o.preload === "boolean" || o.preload === "metadata" ? o.preload : true;
				self._rate = o.rate || 1;
				self._sprite = o.sprite || {};
				self._src = typeof o.src !== "string" ? o.src : [o.src];
				self._volume = o.volume !== void 0 ? o.volume : 1;
				self._xhr = {
					method: o.xhr && o.xhr.method ? o.xhr.method : "GET",
					headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
					withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false
				};
				self._duration = 0;
				self._state = "unloaded";
				self._sounds = [];
				self._endTimers = {};
				self._queue = [];
				self._playLock = false;
				self._onend = o.onend ? [{ fn: o.onend }] : [];
				self._onfade = o.onfade ? [{ fn: o.onfade }] : [];
				self._onload = o.onload ? [{ fn: o.onload }] : [];
				self._onloaderror = o.onloaderror ? [{ fn: o.onloaderror }] : [];
				self._onplayerror = o.onplayerror ? [{ fn: o.onplayerror }] : [];
				self._onpause = o.onpause ? [{ fn: o.onpause }] : [];
				self._onplay = o.onplay ? [{ fn: o.onplay }] : [];
				self._onstop = o.onstop ? [{ fn: o.onstop }] : [];
				self._onmute = o.onmute ? [{ fn: o.onmute }] : [];
				self._onvolume = o.onvolume ? [{ fn: o.onvolume }] : [];
				self._onrate = o.onrate ? [{ fn: o.onrate }] : [];
				self._onseek = o.onseek ? [{ fn: o.onseek }] : [];
				self._onunlock = o.onunlock ? [{ fn: o.onunlock }] : [];
				self._onresume = [];
				self._webAudio = Howler.usingWebAudio && !self._html5;
				if (typeof Howler.ctx !== "undefined" && Howler.ctx && Howler.autoUnlock) Howler._unlockAudio();
				Howler._howls.push(self);
				if (self._autoplay) self._queue.push({
					event: "play",
					action: function() {
						self.play();
					}
				});
				if (self._preload && self._preload !== "none") self.load();
				return self;
			},
			/**
			* Load the audio file.
			* @return {Howler}
			*/
			load: function() {
				var self = this;
				var url = null;
				if (Howler.noAudio) {
					self._emit("loaderror", null, "No audio support.");
					return;
				}
				if (typeof self._src === "string") self._src = [self._src];
				for (var i = 0; i < self._src.length; i++) {
					var ext, str;
					if (self._format && self._format[i]) ext = self._format[i];
					else {
						str = self._src[i];
						if (typeof str !== "string") {
							self._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
							continue;
						}
						ext = /^data:audio\/([^;,]+);/i.exec(str);
						if (!ext) ext = /\.([^.]+)$/.exec(str.split("?", 1)[0]);
						if (ext) ext = ext[1].toLowerCase();
					}
					if (!ext) console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
					if (ext && Howler.codecs(ext)) {
						url = self._src[i];
						break;
					}
				}
				if (!url) {
					self._emit("loaderror", null, "No codec support for selected audio sources.");
					return;
				}
				self._src = url;
				self._state = "loading";
				if (window.location.protocol === "https:" && url.slice(0, 5) === "http:") {
					self._html5 = true;
					self._webAudio = false;
				}
				new Sound(self);
				if (self._webAudio) loadBuffer(self);
				return self;
			},
			/**
			* Play a sound or resume previous playback.
			* @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
			* @param  {Boolean} internal Internal Use: true prevents event firing.
			* @return {Number}          Sound ID.
			*/
			play: function(sprite, internal) {
				var self = this;
				var id = null;
				if (typeof sprite === "number") {
					id = sprite;
					sprite = null;
				} else if (typeof sprite === "string" && self._state === "loaded" && !self._sprite[sprite]) return null;
				else if (typeof sprite === "undefined") {
					sprite = "__default";
					if (!self._playLock) {
						var num = 0;
						for (var i = 0; i < self._sounds.length; i++) if (self._sounds[i]._paused && !self._sounds[i]._ended) {
							num++;
							id = self._sounds[i]._id;
						}
						if (num === 1) sprite = null;
						else id = null;
					}
				}
				var sound = id ? self._soundById(id) : self._inactiveSound();
				if (!sound) return null;
				if (id && !sprite) sprite = sound._sprite || "__default";
				if (self._state !== "loaded") {
					sound._sprite = sprite;
					sound._ended = false;
					var soundId = sound._id;
					self._queue.push({
						event: "play",
						action: function() {
							self.play(soundId);
						}
					});
					return soundId;
				}
				if (id && !sound._paused) {
					if (!internal) self._loadQueue("play");
					return sound._id;
				}
				if (self._webAudio) Howler._autoResume();
				var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1e3);
				var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3 - seek);
				var timeout = duration * 1e3 / Math.abs(sound._rate);
				var start = self._sprite[sprite][0] / 1e3;
				var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3;
				sound._sprite = sprite;
				sound._ended = false;
				var setParams = function() {
					sound._paused = false;
					sound._seek = seek;
					sound._start = start;
					sound._stop = stop;
					sound._loop = !!(sound._loop || self._sprite[sprite][2]);
				};
				if (seek >= stop) {
					self._ended(sound);
					return;
				}
				var node = sound._node;
				if (self._webAudio) {
					var playWebAudio = function() {
						self._playLock = false;
						setParams();
						self._refreshBuffer(sound);
						var vol = sound._muted || self._muted ? 0 : sound._volume;
						node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
						sound._playStart = Howler.ctx.currentTime;
						if (typeof node.bufferSource.start === "undefined") sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
						else sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
						if (timeout !== Infinity) self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
						if (!internal) setTimeout(function() {
							self._emit("play", sound._id);
							self._loadQueue();
						}, 0);
					};
					if (Howler.state === "running" && Howler.ctx.state !== "interrupted") playWebAudio();
					else {
						self._playLock = true;
						self.once("resume", playWebAudio);
						self._clearTimer(sound._id);
					}
				} else {
					var playHtml5 = function() {
						node.currentTime = seek;
						node.muted = sound._muted || self._muted || Howler._muted || node.muted;
						node.volume = sound._volume * Howler.volume();
						node.playbackRate = sound._rate;
						try {
							var play = node.play();
							if (play && typeof Promise !== "undefined" && (play instanceof Promise || typeof play.then === "function")) {
								self._playLock = true;
								setParams();
								play.then(function() {
									self._playLock = false;
									node._unlocked = true;
									if (!internal) self._emit("play", sound._id);
									else self._loadQueue();
								}).catch(function() {
									self._playLock = false;
									self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
									sound._ended = true;
									sound._paused = true;
								});
							} else if (!internal) {
								self._playLock = false;
								setParams();
								self._emit("play", sound._id);
							}
							node.playbackRate = sound._rate;
							if (node.paused) {
								self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
								return;
							}
							if (sprite !== "__default" || sound._loop) self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
							else {
								self._endTimers[sound._id] = function() {
									self._ended(sound);
									node.removeEventListener("ended", self._endTimers[sound._id], false);
								};
								node.addEventListener("ended", self._endTimers[sound._id], false);
							}
						} catch (err) {
							self._emit("playerror", sound._id, err);
						}
					};
					if (node.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
						node.src = self._src;
						node.load();
					}
					var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS;
					if (node.readyState >= 3 || loadedNoReadyState) playHtml5();
					else {
						self._playLock = true;
						self._state = "loading";
						var listener = function() {
							self._state = "loaded";
							playHtml5();
							node.removeEventListener(Howler._canPlayEvent, listener, false);
						};
						node.addEventListener(Howler._canPlayEvent, listener, false);
						self._clearTimer(sound._id);
					}
				}
				return sound._id;
			},
			/**
			* Pause playback and save current position.
			* @param  {Number} id The sound ID (empty to pause all in group).
			* @return {Howl}
			*/
			pause: function(id) {
				var self = this;
				if (self._state !== "loaded" || self._playLock) {
					self._queue.push({
						event: "pause",
						action: function() {
							self.pause(id);
						}
					});
					return self;
				}
				var ids = self._getSoundIds(id);
				for (var i = 0; i < ids.length; i++) {
					self._clearTimer(ids[i]);
					var sound = self._soundById(ids[i]);
					if (sound && !sound._paused) {
						sound._seek = self.seek(ids[i]);
						sound._rateSeek = 0;
						sound._paused = true;
						self._stopFade(ids[i]);
						if (sound._node) {
							if (self._webAudio) {
								if (!sound._node.bufferSource) continue;
								if (typeof sound._node.bufferSource.stop === "undefined") sound._node.bufferSource.noteOff(0);
								else sound._node.bufferSource.stop(0);
								self._cleanBuffer(sound._node);
							} else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) sound._node.pause();
						}
					}
					if (!arguments[1]) self._emit("pause", sound ? sound._id : null);
				}
				return self;
			},
			/**
			* Stop playback and reset to start.
			* @param  {Number} id The sound ID (empty to stop all in group).
			* @param  {Boolean} internal Internal Use: true prevents event firing.
			* @return {Howl}
			*/
			stop: function(id, internal) {
				var self = this;
				if (self._state !== "loaded" || self._playLock) {
					self._queue.push({
						event: "stop",
						action: function() {
							self.stop(id);
						}
					});
					return self;
				}
				var ids = self._getSoundIds(id);
				for (var i = 0; i < ids.length; i++) {
					self._clearTimer(ids[i]);
					var sound = self._soundById(ids[i]);
					if (sound) {
						sound._seek = sound._start || 0;
						sound._rateSeek = 0;
						sound._paused = true;
						sound._ended = true;
						self._stopFade(ids[i]);
						if (sound._node) {
							if (self._webAudio) {
								if (sound._node.bufferSource) {
									if (typeof sound._node.bufferSource.stop === "undefined") sound._node.bufferSource.noteOff(0);
									else sound._node.bufferSource.stop(0);
									self._cleanBuffer(sound._node);
								}
							} else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
								sound._node.currentTime = sound._start || 0;
								sound._node.pause();
								if (sound._node.duration === Infinity) self._clearSound(sound._node);
							}
						}
						if (!internal) self._emit("stop", sound._id);
					}
				}
				return self;
			},
			/**
			* Mute/unmute a single sound or all sounds in this Howl group.
			* @param  {Boolean} muted Set to true to mute and false to unmute.
			* @param  {Number} id    The sound ID to update (omit to mute/unmute all).
			* @return {Howl}
			*/
			mute: function(muted, id) {
				var self = this;
				if (self._state !== "loaded" || self._playLock) {
					self._queue.push({
						event: "mute",
						action: function() {
							self.mute(muted, id);
						}
					});
					return self;
				}
				if (typeof id === "undefined") {
					if (typeof muted === "boolean") self._muted = muted;
					else return self._muted;
				}
				var ids = self._getSoundIds(id);
				for (var i = 0; i < ids.length; i++) {
					var sound = self._soundById(ids[i]);
					if (sound) {
						sound._muted = muted;
						if (sound._interval) self._stopFade(sound._id);
						if (self._webAudio && sound._node) sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
						else if (sound._node) sound._node.muted = Howler._muted ? true : muted;
						self._emit("mute", sound._id);
					}
				}
				return self;
			},
			/**
			* Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
			*   volume() -> Returns the group's volume value.
			*   volume(id) -> Returns the sound id's current volume.
			*   volume(vol) -> Sets the volume of all sounds in this Howl group.
			*   volume(vol, id) -> Sets the volume of passed sound id.
			* @return {Howl/Number} Returns self or current volume.
			*/
			volume: function() {
				var self = this;
				var args = arguments;
				var vol, id;
				if (args.length === 0) return self._volume;
				else if (args.length === 1 || args.length === 2 && typeof args[1] === "undefined") {
					if (self._getSoundIds().indexOf(args[0]) >= 0) id = parseInt(args[0], 10);
					else vol = parseFloat(args[0]);
				} else if (args.length >= 2) {
					vol = parseFloat(args[0]);
					id = parseInt(args[1], 10);
				}
				var sound;
				if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
					if (self._state !== "loaded" || self._playLock) {
						self._queue.push({
							event: "volume",
							action: function() {
								self.volume.apply(self, args);
							}
						});
						return self;
					}
					if (typeof id === "undefined") self._volume = vol;
					id = self._getSoundIds(id);
					for (var i = 0; i < id.length; i++) {
						sound = self._soundById(id[i]);
						if (sound) {
							sound._volume = vol;
							if (!args[2]) self._stopFade(id[i]);
							if (self._webAudio && sound._node && !sound._muted) sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
							else if (sound._node && !sound._muted) sound._node.volume = vol * Howler.volume();
							self._emit("volume", sound._id);
						}
					}
				} else {
					sound = id ? self._soundById(id) : self._sounds[0];
					return sound ? sound._volume : 0;
				}
				return self;
			},
			/**
			* Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
			* @param  {Number} from The value to fade from (0.0 to 1.0).
			* @param  {Number} to   The volume to fade to (0.0 to 1.0).
			* @param  {Number} len  Time in milliseconds to fade.
			* @param  {Number} id   The sound id (omit to fade all sounds).
			* @return {Howl}
			*/
			fade: function(from, to, len, id) {
				var self = this;
				if (self._state !== "loaded" || self._playLock) {
					self._queue.push({
						event: "fade",
						action: function() {
							self.fade(from, to, len, id);
						}
					});
					return self;
				}
				from = Math.min(Math.max(0, parseFloat(from)), 1);
				to = Math.min(Math.max(0, parseFloat(to)), 1);
				len = parseFloat(len);
				self.volume(from, id);
				var ids = self._getSoundIds(id);
				for (var i = 0; i < ids.length; i++) {
					var sound = self._soundById(ids[i]);
					if (sound) {
						if (!id) self._stopFade(ids[i]);
						if (self._webAudio && !sound._muted) {
							var currentTime = Howler.ctx.currentTime;
							var end = currentTime + len / 1e3;
							sound._volume = from;
							sound._node.gain.setValueAtTime(from, currentTime);
							sound._node.gain.linearRampToValueAtTime(to, end);
						}
						self._startFadeInterval(sound, from, to, len, ids[i], typeof id === "undefined");
					}
				}
				return self;
			},
			/**
			* Starts the internal interval to fade a sound.
			* @param  {Object} sound Reference to sound to fade.
			* @param  {Number} from The value to fade from (0.0 to 1.0).
			* @param  {Number} to   The volume to fade to (0.0 to 1.0).
			* @param  {Number} len  Time in milliseconds to fade.
			* @param  {Number} id   The sound id to fade.
			* @param  {Boolean} isGroup   If true, set the volume on the group.
			*/
			_startFadeInterval: function(sound, from, to, len, id, isGroup) {
				var self = this;
				var vol = from;
				var diff = to - from;
				var steps = Math.abs(diff / .01);
				var stepLen = Math.max(4, steps > 0 ? len / steps : len);
				var lastTick = Date.now();
				sound._fadeTo = to;
				sound._interval = setInterval(function() {
					var tick = (Date.now() - lastTick) / len;
					lastTick = Date.now();
					vol += diff * tick;
					vol = Math.round(vol * 100) / 100;
					if (diff < 0) vol = Math.max(to, vol);
					else vol = Math.min(to, vol);
					if (self._webAudio) sound._volume = vol;
					else self.volume(vol, sound._id, true);
					if (isGroup) self._volume = vol;
					if (to < from && vol <= to || to > from && vol >= to) {
						clearInterval(sound._interval);
						sound._interval = null;
						sound._fadeTo = null;
						self.volume(to, sound._id);
						self._emit("fade", sound._id);
					}
				}, stepLen);
			},
			/**
			* Internal method that stops the currently playing fade when
			* a new fade starts, volume is changed or the sound is stopped.
			* @param  {Number} id The sound id.
			* @return {Howl}
			*/
			_stopFade: function(id) {
				var self = this;
				var sound = self._soundById(id);
				if (sound && sound._interval) {
					if (self._webAudio) sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
					clearInterval(sound._interval);
					sound._interval = null;
					self.volume(sound._fadeTo, id);
					sound._fadeTo = null;
					self._emit("fade", id);
				}
				return self;
			},
			/**
			* Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
			*   loop() -> Returns the group's loop value.
			*   loop(id) -> Returns the sound id's loop value.
			*   loop(loop) -> Sets the loop value for all sounds in this Howl group.
			*   loop(loop, id) -> Sets the loop value of passed sound id.
			* @return {Howl/Boolean} Returns self or current loop value.
			*/
			loop: function() {
				var self = this;
				var args = arguments;
				var loop, id, sound;
				if (args.length === 0) return self._loop;
				else if (args.length === 1) {
					if (typeof args[0] === "boolean") {
						loop = args[0];
						self._loop = loop;
					} else {
						sound = self._soundById(parseInt(args[0], 10));
						return sound ? sound._loop : false;
					}
				} else if (args.length === 2) {
					loop = args[0];
					id = parseInt(args[1], 10);
				}
				var ids = self._getSoundIds(id);
				for (var i = 0; i < ids.length; i++) {
					sound = self._soundById(ids[i]);
					if (sound) {
						sound._loop = loop;
						if (self._webAudio && sound._node && sound._node.bufferSource) {
							sound._node.bufferSource.loop = loop;
							if (loop) {
								sound._node.bufferSource.loopStart = sound._start || 0;
								sound._node.bufferSource.loopEnd = sound._stop;
								if (self.playing(ids[i])) {
									self.pause(ids[i], true);
									self.play(ids[i], true);
								}
							}
						}
					}
				}
				return self;
			},
			/**
			* Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
			*   rate() -> Returns the first sound node's current playback rate.
			*   rate(id) -> Returns the sound id's current playback rate.
			*   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
			*   rate(rate, id) -> Sets the playback rate of passed sound id.
			* @return {Howl/Number} Returns self or the current playback rate.
			*/
			rate: function() {
				var self = this;
				var args = arguments;
				var rate, id;
				if (args.length === 0) id = self._sounds[0]._id;
				else if (args.length === 1) {
					if (self._getSoundIds().indexOf(args[0]) >= 0) id = parseInt(args[0], 10);
					else rate = parseFloat(args[0]);
				} else if (args.length === 2) {
					rate = parseFloat(args[0]);
					id = parseInt(args[1], 10);
				}
				var sound;
				if (typeof rate === "number") {
					if (self._state !== "loaded" || self._playLock) {
						self._queue.push({
							event: "rate",
							action: function() {
								self.rate.apply(self, args);
							}
						});
						return self;
					}
					if (typeof id === "undefined") self._rate = rate;
					id = self._getSoundIds(id);
					for (var i = 0; i < id.length; i++) {
						sound = self._soundById(id[i]);
						if (sound) {
							if (self.playing(id[i])) {
								sound._rateSeek = self.seek(id[i]);
								sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
							}
							sound._rate = rate;
							if (self._webAudio && sound._node && sound._node.bufferSource) sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
							else if (sound._node) sound._node.playbackRate = rate;
							var seek = self.seek(id[i]);
							var timeout = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1e3 - seek) * 1e3 / Math.abs(sound._rate);
							if (self._endTimers[id[i]] || !sound._paused) {
								self._clearTimer(id[i]);
								self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
							}
							self._emit("rate", sound._id);
						}
					}
				} else {
					sound = self._soundById(id);
					return sound ? sound._rate : self._rate;
				}
				return self;
			},
			/**
			* Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
			*   seek() -> Returns the first sound node's current seek position.
			*   seek(id) -> Returns the sound id's current seek position.
			*   seek(seek) -> Sets the seek position of the first sound node.
			*   seek(seek, id) -> Sets the seek position of passed sound id.
			* @return {Howl/Number} Returns self or the current seek position.
			*/
			seek: function() {
				var self = this;
				var args = arguments;
				var seek, id;
				if (args.length === 0) {
					if (self._sounds.length) id = self._sounds[0]._id;
				} else if (args.length === 1) {
					if (self._getSoundIds().indexOf(args[0]) >= 0) id = parseInt(args[0], 10);
					else if (self._sounds.length) {
						id = self._sounds[0]._id;
						seek = parseFloat(args[0]);
					}
				} else if (args.length === 2) {
					seek = parseFloat(args[0]);
					id = parseInt(args[1], 10);
				}
				if (typeof id === "undefined") return 0;
				if (typeof seek === "number" && (self._state !== "loaded" || self._playLock)) {
					self._queue.push({
						event: "seek",
						action: function() {
							self.seek.apply(self, args);
						}
					});
					return self;
				}
				var sound = self._soundById(id);
				if (sound) {
					if (typeof seek === "number" && seek >= 0) {
						var playing = self.playing(id);
						if (playing) self.pause(id, true);
						sound._seek = seek;
						sound._ended = false;
						self._clearTimer(id);
						if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) sound._node.currentTime = seek;
						var seekAndEmit = function() {
							if (playing) self.play(id, true);
							self._emit("seek", id);
						};
						if (playing && !self._webAudio) {
							var emitSeek = function() {
								if (!self._playLock) seekAndEmit();
								else setTimeout(emitSeek, 0);
							};
							setTimeout(emitSeek, 0);
						} else seekAndEmit();
					} else if (self._webAudio) {
						var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
						var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
						return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
					} else return sound._node.currentTime;
				}
				return self;
			},
			/**
			* Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
			* @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
			* @return {Boolean} True if playing and false if not.
			*/
			playing: function(id) {
				var self = this;
				if (typeof id === "number") {
					var sound = self._soundById(id);
					return sound ? !sound._paused : false;
				}
				for (var i = 0; i < self._sounds.length; i++) if (!self._sounds[i]._paused) return true;
				return false;
			},
			/**
			* Get the duration of this sound. Passing a sound id will return the sprite duration.
			* @param  {Number} id The sound id to check. If none is passed, return full source duration.
			* @return {Number} Audio duration in seconds.
			*/
			duration: function(id) {
				var self = this;
				var duration = self._duration;
				var sound = self._soundById(id);
				if (sound) duration = self._sprite[sound._sprite][1] / 1e3;
				return duration;
			},
			/**
			* Returns the current loaded state of this Howl.
			* @return {String} 'unloaded', 'loading', 'loaded'
			*/
			state: function() {
				return this._state;
			},
			/**
			* Unload and destroy the current Howl object.
			* This will immediately stop all sound instances attached to this group.
			*/
			unload: function() {
				var self = this;
				var sounds = self._sounds;
				for (var i = 0; i < sounds.length; i++) {
					if (!sounds[i]._paused) self.stop(sounds[i]._id);
					if (!self._webAudio) {
						self._clearSound(sounds[i]._node);
						sounds[i]._node.removeEventListener("error", sounds[i]._errorFn, false);
						sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
						sounds[i]._node.removeEventListener("ended", sounds[i]._endFn, false);
						Howler._releaseHtml5Audio(sounds[i]._node);
					}
					delete sounds[i]._node;
					self._clearTimer(sounds[i]._id);
				}
				var index = Howler._howls.indexOf(self);
				if (index >= 0) Howler._howls.splice(index, 1);
				var remCache = true;
				for (i = 0; i < Howler._howls.length; i++) if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
					remCache = false;
					break;
				}
				if (cache && remCache) delete cache[self._src];
				Howler.noAudio = false;
				self._state = "unloaded";
				self._sounds = [];
				self = null;
				return null;
			},
			/**
			* Listen to a custom event.
			* @param  {String}   event Event name.
			* @param  {Function} fn    Listener to call.
			* @param  {Number}   id    (optional) Only listen to events for this sound.
			* @param  {Number}   once  (INTERNAL) Marks event to fire only once.
			* @return {Howl}
			*/
			on: function(event, fn, id, once) {
				var self = this;
				var events = self["_on" + event];
				if (typeof fn === "function") events.push(once ? {
					id,
					fn,
					once
				} : {
					id,
					fn
				});
				return self;
			},
			/**
			* Remove a custom event. Call without parameters to remove all events.
			* @param  {String}   event Event name.
			* @param  {Function} fn    Listener to remove. Leave empty to remove all.
			* @param  {Number}   id    (optional) Only remove events for this sound.
			* @return {Howl}
			*/
			off: function(event, fn, id) {
				var self = this;
				var events = self["_on" + event];
				var i = 0;
				if (typeof fn === "number") {
					id = fn;
					fn = null;
				}
				if (fn || id) for (i = 0; i < events.length; i++) {
					var isId = id === events[i].id;
					if (fn === events[i].fn && isId || !fn && isId) {
						events.splice(i, 1);
						break;
					}
				}
				else if (event) self["_on" + event] = [];
				else {
					var keys = Object.keys(self);
					for (i = 0; i < keys.length; i++) if (keys[i].indexOf("_on") === 0 && Array.isArray(self[keys[i]])) self[keys[i]] = [];
				}
				return self;
			},
			/**
			* Listen to a custom event and remove it once fired.
			* @param  {String}   event Event name.
			* @param  {Function} fn    Listener to call.
			* @param  {Number}   id    (optional) Only listen to events for this sound.
			* @return {Howl}
			*/
			once: function(event, fn, id) {
				var self = this;
				self.on(event, fn, id, 1);
				return self;
			},
			/**
			* Emit all events of a specific type and pass the sound id.
			* @param  {String} event Event name.
			* @param  {Number} id    Sound ID.
			* @param  {Number} msg   Message to go with event.
			* @return {Howl}
			*/
			_emit: function(event, id, msg) {
				var self = this;
				var events = self["_on" + event];
				for (var i = events.length - 1; i >= 0; i--) if (!events[i].id || events[i].id === id || event === "load") {
					setTimeout(function(fn) {
						fn.call(this, id, msg);
					}.bind(self, events[i].fn), 0);
					if (events[i].once) self.off(event, events[i].fn, events[i].id);
				}
				self._loadQueue(event);
				return self;
			},
			/**
			* Queue of actions initiated before the sound has loaded.
			* These will be called in sequence, with the next only firing
			* after the previous has finished executing (even if async like play).
			* @return {Howl}
			*/
			_loadQueue: function(event) {
				var self = this;
				if (self._queue.length > 0) {
					var task = self._queue[0];
					if (task.event === event) {
						self._queue.shift();
						self._loadQueue();
					}
					if (!event) task.action();
				}
				return self;
			},
			/**
			* Fired when playback ends at the end of the duration.
			* @param  {Sound} sound The sound object to work with.
			* @return {Howl}
			*/
			_ended: function(sound) {
				var self = this;
				var sprite = sound._sprite;
				if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
					setTimeout(self._ended.bind(self, sound), 100);
					return self;
				}
				var loop = !!(sound._loop || self._sprite[sprite][2]);
				self._emit("end", sound._id);
				if (!self._webAudio && loop) self.stop(sound._id, true).play(sound._id);
				if (self._webAudio && loop) {
					self._emit("play", sound._id);
					sound._seek = sound._start || 0;
					sound._rateSeek = 0;
					sound._playStart = Howler.ctx.currentTime;
					var timeout = (sound._stop - sound._start) * 1e3 / Math.abs(sound._rate);
					self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
				}
				if (self._webAudio && !loop) {
					sound._paused = true;
					sound._ended = true;
					sound._seek = sound._start || 0;
					sound._rateSeek = 0;
					self._clearTimer(sound._id);
					self._cleanBuffer(sound._node);
					Howler._autoSuspend();
				}
				if (!self._webAudio && !loop) self.stop(sound._id, true);
				return self;
			},
			/**
			* Clear the end timer for a sound playback.
			* @param  {Number} id The sound ID.
			* @return {Howl}
			*/
			_clearTimer: function(id) {
				var self = this;
				if (self._endTimers[id]) {
					if (typeof self._endTimers[id] !== "function") clearTimeout(self._endTimers[id]);
					else {
						var sound = self._soundById(id);
						if (sound && sound._node) sound._node.removeEventListener("ended", self._endTimers[id], false);
					}
					delete self._endTimers[id];
				}
				return self;
			},
			/**
			* Return the sound identified by this ID, or return null.
			* @param  {Number} id Sound ID
			* @return {Object}    Sound object or null.
			*/
			_soundById: function(id) {
				var self = this;
				for (var i = 0; i < self._sounds.length; i++) if (id === self._sounds[i]._id) return self._sounds[i];
				return null;
			},
			/**
			* Return an inactive sound from the pool or create a new one.
			* @return {Sound} Sound playback object.
			*/
			_inactiveSound: function() {
				var self = this;
				self._drain();
				for (var i = 0; i < self._sounds.length; i++) if (self._sounds[i]._ended) return self._sounds[i].reset();
				return new Sound(self);
			},
			/**
			* Drain excess inactive sounds from the pool.
			*/
			_drain: function() {
				var self = this;
				var limit = self._pool;
				var cnt = 0;
				var i = 0;
				if (self._sounds.length < limit) return;
				for (i = 0; i < self._sounds.length; i++) if (self._sounds[i]._ended) cnt++;
				for (i = self._sounds.length - 1; i >= 0; i--) {
					if (cnt <= limit) return;
					if (self._sounds[i]._ended) {
						if (self._webAudio && self._sounds[i]._node) self._sounds[i]._node.disconnect(0);
						self._sounds.splice(i, 1);
						cnt--;
					}
				}
			},
			/**
			* Get all ID's from the sounds pool.
			* @param  {Number} id Only return one ID if one is passed.
			* @return {Array}    Array of IDs.
			*/
			_getSoundIds: function(id) {
				var self = this;
				if (typeof id === "undefined") {
					var ids = [];
					for (var i = 0; i < self._sounds.length; i++) ids.push(self._sounds[i]._id);
					return ids;
				} else return [id];
			},
			/**
			* Load the sound back into the buffer source.
			* @param  {Sound} sound The sound object to work with.
			* @return {Howl}
			*/
			_refreshBuffer: function(sound) {
				var self = this;
				sound._node.bufferSource = Howler.ctx.createBufferSource();
				sound._node.bufferSource.buffer = cache[self._src];
				if (sound._panner) sound._node.bufferSource.connect(sound._panner);
				else sound._node.bufferSource.connect(sound._node);
				sound._node.bufferSource.loop = sound._loop;
				if (sound._loop) {
					sound._node.bufferSource.loopStart = sound._start || 0;
					sound._node.bufferSource.loopEnd = sound._stop || 0;
				}
				sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);
				return self;
			},
			/**
			* Prevent memory leaks by cleaning up the buffer source after playback.
			* @param  {Object} node Sound's audio node containing the buffer source.
			* @return {Howl}
			*/
			_cleanBuffer: function(node) {
				var self = this;
				var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf("Apple") >= 0;
				if (!node.bufferSource) return self;
				if (Howler._scratchBuffer && node.bufferSource) {
					node.bufferSource.onended = null;
					node.bufferSource.disconnect(0);
					if (isIOS) try {
						node.bufferSource.buffer = Howler._scratchBuffer;
					} catch (e) {}
				}
				node.bufferSource = null;
				return self;
			},
			/**
			* Set the source to a 0-second silence to stop any downloading (except in IE).
			* @param  {Object} node Audio node to clear.
			*/
			_clearSound: function(node) {
				if (!/MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent)) node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
			}
		};
		/** Single Sound Methods **/
		/**
		* Setup the sound object, which each node attached to a Howl group is contained in.
		* @param {Object} howl The Howl parent group.
		*/
		var Sound = function(howl) {
			this._parent = howl;
			this.init();
		};
		Sound.prototype = {
			/**
			* Initialize a new Sound object.
			* @return {Sound}
			*/
			init: function() {
				var self = this;
				var parent = self._parent;
				self._muted = parent._muted;
				self._loop = parent._loop;
				self._volume = parent._volume;
				self._rate = parent._rate;
				self._seek = 0;
				self._paused = true;
				self._ended = true;
				self._sprite = "__default";
				self._id = ++Howler._counter;
				parent._sounds.push(self);
				self.create();
				return self;
			},
			/**
			* Create and setup a new sound object, whether HTML5 Audio or Web Audio.
			* @return {Sound}
			*/
			create: function() {
				var self = this;
				var parent = self._parent;
				var volume = Howler._muted || self._muted || self._parent._muted ? 0 : self._volume;
				if (parent._webAudio) {
					self._node = typeof Howler.ctx.createGain === "undefined" ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
					self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
					self._node.paused = true;
					self._node.connect(Howler.masterGain);
				} else if (!Howler.noAudio) {
					self._node = Howler._obtainHtml5Audio();
					self._errorFn = self._errorListener.bind(self);
					self._node.addEventListener("error", self._errorFn, false);
					self._loadFn = self._loadListener.bind(self);
					self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);
					self._endFn = self._endListener.bind(self);
					self._node.addEventListener("ended", self._endFn, false);
					self._node.src = parent._src;
					self._node.preload = parent._preload === true ? "auto" : parent._preload;
					self._node.volume = volume * Howler.volume();
					self._node.load();
				}
				return self;
			},
			/**
			* Reset the parameters of this sound to the original state (for recycle).
			* @return {Sound}
			*/
			reset: function() {
				var self = this;
				var parent = self._parent;
				self._muted = parent._muted;
				self._loop = parent._loop;
				self._volume = parent._volume;
				self._rate = parent._rate;
				self._seek = 0;
				self._rateSeek = 0;
				self._paused = true;
				self._ended = true;
				self._sprite = "__default";
				self._id = ++Howler._counter;
				return self;
			},
			/**
			* HTML5 Audio error listener callback.
			*/
			_errorListener: function() {
				var self = this;
				self._parent._emit("loaderror", self._id, self._node.error ? self._node.error.code : 0);
				self._node.removeEventListener("error", self._errorFn, false);
			},
			/**
			* HTML5 Audio canplaythrough listener callback.
			*/
			_loadListener: function() {
				var self = this;
				var parent = self._parent;
				parent._duration = Math.ceil(self._node.duration * 10) / 10;
				if (Object.keys(parent._sprite).length === 0) parent._sprite = { __default: [0, parent._duration * 1e3] };
				if (parent._state !== "loaded") {
					parent._state = "loaded";
					parent._emit("load");
					parent._loadQueue();
				}
				self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
			},
			/**
			* HTML5 Audio ended listener callback.
			*/
			_endListener: function() {
				var self = this;
				var parent = self._parent;
				if (parent._duration === Infinity) {
					parent._duration = Math.ceil(self._node.duration * 10) / 10;
					if (parent._sprite.__default[1] === Infinity) parent._sprite.__default[1] = parent._duration * 1e3;
					parent._ended(self);
				}
				self._node.removeEventListener("ended", self._endFn, false);
			}
		};
		/** Helper Methods **/
		var cache = {};
		/**
		* Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
		* @param  {Howl} self
		*/
		var loadBuffer = function(self) {
			var url = self._src;
			if (cache[url]) {
				self._duration = cache[url].duration;
				loadSound(self);
				return;
			}
			if (/^data:[^;]+;base64,/.test(url)) {
				var data = atob(url.split(",")[1]);
				var dataView = new Uint8Array(data.length);
				for (var i = 0; i < data.length; ++i) dataView[i] = data.charCodeAt(i);
				decodeAudioData(dataView.buffer, self);
			} else {
				var xhr = new XMLHttpRequest();
				xhr.open(self._xhr.method, url, true);
				xhr.withCredentials = self._xhr.withCredentials;
				xhr.responseType = "arraybuffer";
				if (self._xhr.headers) Object.keys(self._xhr.headers).forEach(function(key) {
					xhr.setRequestHeader(key, self._xhr.headers[key]);
				});
				xhr.onload = function() {
					var code = (xhr.status + "")[0];
					if (code !== "0" && code !== "2" && code !== "3") {
						self._emit("loaderror", null, "Failed loading audio file with status: " + xhr.status + ".");
						return;
					}
					decodeAudioData(xhr.response, self);
				};
				xhr.onerror = function() {
					if (self._webAudio) {
						self._html5 = true;
						self._webAudio = false;
						self._sounds = [];
						delete cache[url];
						self.load();
					}
				};
				safeXhrSend(xhr);
			}
		};
		/**
		* Send the XHR request wrapped in a try/catch.
		* @param  {Object} xhr XHR to send.
		*/
		var safeXhrSend = function(xhr) {
			try {
				xhr.send();
			} catch (e) {
				xhr.onerror();
			}
		};
		/**
		* Decode audio data from an array buffer.
		* @param  {ArrayBuffer} arraybuffer The audio data.
		* @param  {Howl}        self
		*/
		var decodeAudioData = function(arraybuffer, self) {
			var error = function() {
				self._emit("loaderror", null, "Decoding audio data failed.");
			};
			var success = function(buffer) {
				if (buffer && self._sounds.length > 0) {
					cache[self._src] = buffer;
					loadSound(self, buffer);
				} else error();
			};
			if (typeof Promise !== "undefined" && Howler.ctx.decodeAudioData.length === 1) Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
			else Howler.ctx.decodeAudioData(arraybuffer, success, error);
		};
		/**
		* Sound is now loaded, so finish setting everything up and fire the loaded event.
		* @param  {Howl} self
		* @param  {Object} buffer The decoded buffer sound source.
		*/
		var loadSound = function(self, buffer) {
			if (buffer && !self._duration) self._duration = buffer.duration;
			if (Object.keys(self._sprite).length === 0) self._sprite = { __default: [0, self._duration * 1e3] };
			if (self._state !== "loaded") {
				self._state = "loaded";
				self._emit("load");
				self._loadQueue();
			}
		};
		/**
		* Setup the audio context when available, or switch to HTML5 Audio mode.
		*/
		var setupAudioContext = function() {
			if (!Howler.usingWebAudio) return;
			try {
				if (typeof AudioContext !== "undefined") Howler.ctx = new AudioContext();
				else if (typeof webkitAudioContext !== "undefined") Howler.ctx = new webkitAudioContext();
				else Howler.usingWebAudio = false;
			} catch (e) {
				Howler.usingWebAudio = false;
			}
			if (!Howler.ctx) Howler.usingWebAudio = false;
			var iOS = /iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform);
			var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
			var version = appVersion ? parseInt(appVersion[1], 10) : null;
			if (iOS && version && version < 9) {
				var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
				if (Howler._navigator && !safari) Howler.usingWebAudio = false;
			}
			if (Howler.usingWebAudio) {
				Howler.masterGain = typeof Howler.ctx.createGain === "undefined" ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
				Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
				Howler.masterGain.connect(Howler.ctx.destination);
			}
			Howler._setup();
		};
		if (typeof define === "function" && define.amd) define([], function() {
			return {
				Howler,
				Howl
			};
		});
		if (typeof exports !== "undefined") {
			exports.Howler = Howler;
			exports.Howl = Howl;
		}
		if (typeof global !== "undefined") {
			global.HowlerGlobal = HowlerGlobal;
			global.Howler = Howler;
			global.Howl = Howl;
			global.Sound = Sound;
		} else if (typeof window !== "undefined") {
			window.HowlerGlobal = HowlerGlobal;
			window.Howler = Howler;
			window.Howl = Howl;
			window.Sound = Sound;
		}
	})();
	/*!
	*  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
	*  
	*  howler.js v2.2.4
	*  howlerjs.com
	*
	*  (c) 2013-2020, James Simpson of GoldFire Studios
	*  goldfirestudios.com
	*
	*  MIT License
	*/
	(function() {
		"use strict";
		HowlerGlobal.prototype._pos = [
			0,
			0,
			0
		];
		HowlerGlobal.prototype._orientation = [
			0,
			0,
			-1,
			0,
			1,
			0
		];
		/** Global Methods **/
		/**
		* Helper method to update the stereo panning position of all current Howls.
		* Future Howls will not use this value unless explicitly set.
		* @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
		* @return {Howler/Number}     Self or current stereo panning value.
		*/
		HowlerGlobal.prototype.stereo = function(pan) {
			var self = this;
			if (!self.ctx || !self.ctx.listener) return self;
			for (var i = self._howls.length - 1; i >= 0; i--) self._howls[i].stereo(pan);
			return self;
		};
		/**
		* Get/set the position of the listener in 3D cartesian space. Sounds using
		* 3D position will be relative to the listener's position.
		* @param  {Number} x The x-position of the listener.
		* @param  {Number} y The y-position of the listener.
		* @param  {Number} z The z-position of the listener.
		* @return {Howler/Array}   Self or current listener position.
		*/
		HowlerGlobal.prototype.pos = function(x, y, z) {
			var self = this;
			if (!self.ctx || !self.ctx.listener) return self;
			y = typeof y !== "number" ? self._pos[1] : y;
			z = typeof z !== "number" ? self._pos[2] : z;
			if (typeof x === "number") {
				self._pos = [
					x,
					y,
					z
				];
				if (typeof self.ctx.listener.positionX !== "undefined") {
					self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, .1);
					self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, .1);
					self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, .1);
				} else self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
			} else return self._pos;
			return self;
		};
		/**
		* Get/set the direction the listener is pointing in the 3D cartesian space.
		* A front and up vector must be provided. The front is the direction the
		* face of the listener is pointing, and up is the direction the top of the
		* listener is pointing. Thus, these values are expected to be at right angles
		* from each other.
		* @param  {Number} x   The x-orientation of the listener.
		* @param  {Number} y   The y-orientation of the listener.
		* @param  {Number} z   The z-orientation of the listener.
		* @param  {Number} xUp The x-orientation of the top of the listener.
		* @param  {Number} yUp The y-orientation of the top of the listener.
		* @param  {Number} zUp The z-orientation of the top of the listener.
		* @return {Howler/Array}     Returns self or the current orientation vectors.
		*/
		HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
			var self = this;
			if (!self.ctx || !self.ctx.listener) return self;
			var or = self._orientation;
			y = typeof y !== "number" ? or[1] : y;
			z = typeof z !== "number" ? or[2] : z;
			xUp = typeof xUp !== "number" ? or[3] : xUp;
			yUp = typeof yUp !== "number" ? or[4] : yUp;
			zUp = typeof zUp !== "number" ? or[5] : zUp;
			if (typeof x === "number") {
				self._orientation = [
					x,
					y,
					z,
					xUp,
					yUp,
					zUp
				];
				if (typeof self.ctx.listener.forwardX !== "undefined") {
					self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, .1);
					self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, .1);
					self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, .1);
					self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, .1);
					self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, .1);
					self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, .1);
				} else self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
			} else return or;
			return self;
		};
		/** Group Methods **/
		/**
		* Add new properties to the core init.
		* @param  {Function} _super Core init method.
		* @return {Howl}
		*/
		Howl.prototype.init = (function(_super) {
			return function(o) {
				var self = this;
				self._orientation = o.orientation || [
					1,
					0,
					0
				];
				self._stereo = o.stereo || null;
				self._pos = o.pos || null;
				self._pannerAttr = {
					coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : 360,
					coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : 360,
					coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : 0,
					distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : "inverse",
					maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : 1e4,
					panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : "HRTF",
					refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : 1,
					rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : 1
				};
				self._onstereo = o.onstereo ? [{ fn: o.onstereo }] : [];
				self._onpos = o.onpos ? [{ fn: o.onpos }] : [];
				self._onorientation = o.onorientation ? [{ fn: o.onorientation }] : [];
				return _super.call(this, o);
			};
		})(Howl.prototype.init);
		/**
		* Get/set the stereo panning of the audio source for this sound or all in the group.
		* @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
		* @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
		* @return {Howl/Number}    Returns self or the current stereo panning value.
		*/
		Howl.prototype.stereo = function(pan, id) {
			var self = this;
			if (!self._webAudio) return self;
			if (self._state !== "loaded") {
				self._queue.push({
					event: "stereo",
					action: function() {
						self.stereo(pan, id);
					}
				});
				return self;
			}
			var pannerType = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
			if (typeof id === "undefined") {
				if (typeof pan === "number") {
					self._stereo = pan;
					self._pos = [
						pan,
						0,
						0
					];
				} else return self._stereo;
			}
			var ids = self._getSoundIds(id);
			for (var i = 0; i < ids.length; i++) {
				var sound = self._soundById(ids[i]);
				if (sound) {
					if (typeof pan === "number") {
						sound._stereo = pan;
						sound._pos = [
							pan,
							0,
							0
						];
						if (sound._node) {
							sound._pannerAttr.panningModel = "equalpower";
							if (!sound._panner || !sound._panner.pan) setupPanner(sound, pannerType);
							if (pannerType === "spatial") {
								if (typeof sound._panner.positionX !== "undefined") {
									sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
									sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
									sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
								} else sound._panner.setPosition(pan, 0, 0);
							} else sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
						}
						self._emit("stereo", sound._id);
					} else return sound._stereo;
				}
			}
			return self;
		};
		/**
		* Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
		* @param  {Number} x  The x-position of the audio source.
		* @param  {Number} y  The y-position of the audio source.
		* @param  {Number} z  The z-position of the audio source.
		* @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
		* @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
		*/
		Howl.prototype.pos = function(x, y, z, id) {
			var self = this;
			if (!self._webAudio) return self;
			if (self._state !== "loaded") {
				self._queue.push({
					event: "pos",
					action: function() {
						self.pos(x, y, z, id);
					}
				});
				return self;
			}
			y = typeof y !== "number" ? 0 : y;
			z = typeof z !== "number" ? -.5 : z;
			if (typeof id === "undefined") {
				if (typeof x === "number") self._pos = [
					x,
					y,
					z
				];
				else return self._pos;
			}
			var ids = self._getSoundIds(id);
			for (var i = 0; i < ids.length; i++) {
				var sound = self._soundById(ids[i]);
				if (sound) {
					if (typeof x === "number") {
						sound._pos = [
							x,
							y,
							z
						];
						if (sound._node) {
							if (!sound._panner || sound._panner.pan) setupPanner(sound, "spatial");
							if (typeof sound._panner.positionX !== "undefined") {
								sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
								sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
								sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
							} else sound._panner.setPosition(x, y, z);
						}
						self._emit("pos", sound._id);
					} else return sound._pos;
				}
			}
			return self;
		};
		/**
		* Get/set the direction the audio source is pointing in the 3D cartesian coordinate
		* space. Depending on how direction the sound is, based on the `cone` attributes,
		* a sound pointing away from the listener can be quiet or silent.
		* @param  {Number} x  The x-orientation of the source.
		* @param  {Number} y  The y-orientation of the source.
		* @param  {Number} z  The z-orientation of the source.
		* @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
		* @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
		*/
		Howl.prototype.orientation = function(x, y, z, id) {
			var self = this;
			if (!self._webAudio) return self;
			if (self._state !== "loaded") {
				self._queue.push({
					event: "orientation",
					action: function() {
						self.orientation(x, y, z, id);
					}
				});
				return self;
			}
			y = typeof y !== "number" ? self._orientation[1] : y;
			z = typeof z !== "number" ? self._orientation[2] : z;
			if (typeof id === "undefined") {
				if (typeof x === "number") self._orientation = [
					x,
					y,
					z
				];
				else return self._orientation;
			}
			var ids = self._getSoundIds(id);
			for (var i = 0; i < ids.length; i++) {
				var sound = self._soundById(ids[i]);
				if (sound) {
					if (typeof x === "number") {
						sound._orientation = [
							x,
							y,
							z
						];
						if (sound._node) {
							if (!sound._panner) {
								if (!sound._pos) sound._pos = self._pos || [
									0,
									0,
									-.5
								];
								setupPanner(sound, "spatial");
							}
							if (typeof sound._panner.orientationX !== "undefined") {
								sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
								sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
								sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
							} else sound._panner.setOrientation(x, y, z);
						}
						self._emit("orientation", sound._id);
					} else return sound._orientation;
				}
			}
			return self;
		};
		/**
		* Get/set the panner node's attributes for a sound or group of sounds.
		* This method can optionall take 0, 1 or 2 arguments.
		*   pannerAttr() -> Returns the group's values.
		*   pannerAttr(id) -> Returns the sound id's values.
		*   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
		*   pannerAttr(o, id) -> Set's the values of passed sound id.
		*
		*   Attributes:
		*     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
		*                      inside of which there will be no volume reduction.
		*     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
		*                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
		*     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
		*                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
		*     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
		*                     listener. Can be `linear`, `inverse` or `exponential.
		*     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
		*                   will not be reduced any further.
		*     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
		*                   This is simply a variable of the distance model and has a different effect depending on which model
		*                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
		*     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
		*                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
		*                     with `inverse` and `exponential`.
		*     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
		*                     Can be `HRTF` or `equalpower`.
		*
		* @return {Howl/Object} Returns self or current panner attributes.
		*/
		Howl.prototype.pannerAttr = function() {
			var self = this;
			var args = arguments;
			var o, id, sound;
			if (!self._webAudio) return self;
			if (args.length === 0) return self._pannerAttr;
			else if (args.length === 1) {
				if (typeof args[0] === "object") {
					o = args[0];
					if (typeof id === "undefined") {
						if (!o.pannerAttr) o.pannerAttr = {
							coneInnerAngle: o.coneInnerAngle,
							coneOuterAngle: o.coneOuterAngle,
							coneOuterGain: o.coneOuterGain,
							distanceModel: o.distanceModel,
							maxDistance: o.maxDistance,
							refDistance: o.refDistance,
							rolloffFactor: o.rolloffFactor,
							panningModel: o.panningModel
						};
						self._pannerAttr = {
							coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== "undefined" ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
							coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== "undefined" ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
							coneOuterGain: typeof o.pannerAttr.coneOuterGain !== "undefined" ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
							distanceModel: typeof o.pannerAttr.distanceModel !== "undefined" ? o.pannerAttr.distanceModel : self._distanceModel,
							maxDistance: typeof o.pannerAttr.maxDistance !== "undefined" ? o.pannerAttr.maxDistance : self._maxDistance,
							refDistance: typeof o.pannerAttr.refDistance !== "undefined" ? o.pannerAttr.refDistance : self._refDistance,
							rolloffFactor: typeof o.pannerAttr.rolloffFactor !== "undefined" ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
							panningModel: typeof o.pannerAttr.panningModel !== "undefined" ? o.pannerAttr.panningModel : self._panningModel
						};
					}
				} else {
					sound = self._soundById(parseInt(args[0], 10));
					return sound ? sound._pannerAttr : self._pannerAttr;
				}
			} else if (args.length === 2) {
				o = args[0];
				id = parseInt(args[1], 10);
			}
			var ids = self._getSoundIds(id);
			for (var i = 0; i < ids.length; i++) {
				sound = self._soundById(ids[i]);
				if (sound) {
					var pa = sound._pannerAttr;
					pa = {
						coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : pa.coneInnerAngle,
						coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : pa.coneOuterAngle,
						coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : pa.coneOuterGain,
						distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : pa.distanceModel,
						maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : pa.maxDistance,
						refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : pa.refDistance,
						rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : pa.rolloffFactor,
						panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : pa.panningModel
					};
					var panner = sound._panner;
					if (!panner) {
						if (!sound._pos) sound._pos = self._pos || [
							0,
							0,
							-.5
						];
						setupPanner(sound, "spatial");
						panner = sound._panner;
					}
					panner.coneInnerAngle = pa.coneInnerAngle;
					panner.coneOuterAngle = pa.coneOuterAngle;
					panner.coneOuterGain = pa.coneOuterGain;
					panner.distanceModel = pa.distanceModel;
					panner.maxDistance = pa.maxDistance;
					panner.refDistance = pa.refDistance;
					panner.rolloffFactor = pa.rolloffFactor;
					panner.panningModel = pa.panningModel;
				}
			}
			return self;
		};
		/** Single Sound Methods **/
		/**
		* Add new properties to the core Sound init.
		* @param  {Function} _super Core Sound init method.
		* @return {Sound}
		*/
		Sound.prototype.init = (function(_super) {
			return function() {
				var self = this;
				var parent = self._parent;
				self._orientation = parent._orientation;
				self._stereo = parent._stereo;
				self._pos = parent._pos;
				self._pannerAttr = parent._pannerAttr;
				_super.call(this);
				if (self._stereo) parent.stereo(self._stereo);
				else if (self._pos) parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
			};
		})(Sound.prototype.init);
		/**
		* Override the Sound.reset method to clean up properties from the spatial plugin.
		* @param  {Function} _super Sound reset method.
		* @return {Sound}
		*/
		Sound.prototype.reset = (function(_super) {
			return function() {
				var self = this;
				var parent = self._parent;
				self._orientation = parent._orientation;
				self._stereo = parent._stereo;
				self._pos = parent._pos;
				self._pannerAttr = parent._pannerAttr;
				if (self._stereo) parent.stereo(self._stereo);
				else if (self._pos) parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
				else if (self._panner) {
					self._panner.disconnect(0);
					self._panner = void 0;
					parent._refreshBuffer(self);
				}
				return _super.call(this);
			};
		})(Sound.prototype.reset);
		/** Helper Methods **/
		/**
		* Create a new panner node and save it on the sound.
		* @param  {Sound} sound Specific sound to setup panning on.
		* @param {String} type Type of panner to create: 'stereo' or 'spatial'.
		*/
		var setupPanner = function(sound, type) {
			type = type || "spatial";
			if (type === "spatial") {
				sound._panner = Howler.ctx.createPanner();
				sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
				sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
				sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
				sound._panner.distanceModel = sound._pannerAttr.distanceModel;
				sound._panner.maxDistance = sound._pannerAttr.maxDistance;
				sound._panner.refDistance = sound._pannerAttr.refDistance;
				sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
				sound._panner.panningModel = sound._pannerAttr.panningModel;
				if (typeof sound._panner.positionX !== "undefined") {
					sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
					sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
					sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
				} else sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
				if (typeof sound._panner.orientationX !== "undefined") {
					sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
					sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
					sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
				} else sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
			} else {
				sound._panner = Howler.ctx.createStereoPanner();
				sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
			}
			sound._panner.connect(sound._node);
			if (!sound._paused) sound._parent.pause(sound._id, true).play(sound._id, true);
		};
	})();
}));
var init_config = __esmMin((() => {}));
//#endregion
//#region score-display/players/webmscore.js
var WebMscorePlayer;
var init_webmscore = __esmMin((() => {
	init_webmscore$1();
	init_config();
	WebMscorePlayer = class {
		/**
		* @param {*} options
		* - `src`, array of a single element: url of the file to load
		* - `onload` callback to execute once the player is ready
		* - `onend` callback to execute once the file is over
		* - `excerpt`: index of the instrument to use (-1 being "all")
		* - Optional `mscz` object (will replace `src`)
		* - Optional `soundfont` url of the soundfont to use
		*/
		constructor(options = {}) {
			this.onend = options.onend;
			this.excerpt = options.excerpt;
			this.score_type = options.type;
			this._duration = 0;
			this.next_seek = null;
			this.is_playing = false;
			this.synth_complete = false;
			this.synth_running = false;
			this.stopSynth = async () => {};
			this.CHANNELS = 2;
			this.FRAME_LENGTH = 512;
			this.BUFFER_QUEUE = [];
			this.BUFFER_WAIT_LENGTH = 64;
			this.audioCtx = new (AudioContext || webkitAudioContext)({ latencyHint: "interactive" });
			this.currentTime = 0;
			this.waitForProcessing = true;
			this.mscz = options.mscz || new WebMscoreLoader(options.src.at(0), this.score_type, { soundfont: options.soundfont || "soundfonts/FluidR3Mono_GM.sf3" });
			this.load_data(options.onload);
			this.destroy = async () => {
				if (options.mscz) return;
				(await this.mscz.score).destroy(false);
			};
		}
		async load_data(onload) {
			let score = await this.mscz.score;
			let metadata = await score.metadata();
			await this.mscz.setSoundFont();
			await score.generateExcerpts();
			await score.setExcerptId(this.excerpt);
			this._duration = metadata.duration;
			onload();
		}
		outputBufferFillZeroes(e) {
			for (let c = 0; c < this.CHANNELS; c++) e.outputBuffer.getChannelData(c).fill(0);
		}
		setupProcessor() {
			const processor = this.audioCtx.createScriptProcessor(this.FRAME_LENGTH, 0, this.CHANNELS);
			this.currentTime = 0;
			processor.onaudioprocess = (e) => {
				if (this.BUFFER_QUEUE.length === 0) {
					this.outputBufferFillZeroes(e);
					if (this.synth_complete) {
						if (this.is_playing) this.onend();
						return;
					}
					if (!this.waitForProcessing) {
						console.warn("WebMscorePlayer: Empty buffer queue");
						this.BUFFER_WAIT_LENGTH = Math.min(256, this.BUFFER_WAIT_LENGTH * 2);
						this.waitForProcessing = true;
					}
					return;
				}
				if (this.waitForProcessing) {
					if (this.BUFFER_QUEUE.length < this.BUFFER_WAIT_LENGTH && !this.synth_complete) return this.outputBufferFillZeroes(e);
					this.waitForProcessing = false;
				}
				const frame = this.BUFFER_QUEUE.shift();
				for (let c = 0; c < this.CHANNELS; c++) e.outputBuffer.getChannelData(c).set(frame.chunk[c]);
				this.currentTime = frame.startTime;
			};
			processor.connect(this.audioCtx.destination);
			this.processor = processor;
		}
		async synthAudioToQueue(start = 0) {
			const fn = await (await this.mscz.score).synthAudio(start);
			this.stopSynth = (async () => await fn(false));
			this.synth_running = true;
			this.BUFFER_QUEUE = [];
			for (;;) {
				const res = await fn();
				const frames = new Float32Array(res.chunk.buffer);
				const chunk = {};
				for (let c = 0; c < this.CHANNELS; c++) chunk[c] = frames.subarray(c * this.FRAME_LENGTH, (c + 1) * this.FRAME_LENGTH);
				this.BUFFER_QUEUE.push({
					chunk,
					startTime: res.startTime
				});
				if (res.done) {
					this.synth_complete = true;
					break;
				}
			}
			this.synth_running = false;
		}
		async play() {
			if (!this.processor) this.setupProcessor();
			if (this.next_seek !== null || !this.synth_running) {
				await this.mscz.score;
				const start_time = Math.min(this.next_seek, this.duration()) ?? 0;
				this.currentTime = start_time;
				this.synthAudioToQueue(start_time);
				this.next_seek = null;
			}
			this.is_playing = true;
			if (this.audioCtx.state === "suspended") await this.audioCtx.resume();
		}
		pause() {
			this.is_playing = false;
			this.audioCtx.suspend();
		}
		playing() {
			return this.is_playing;
		}
		duration() {
			return this._duration + 2;
		}
		seek(time) {
			if (time === void 0) {
				if (!this.is_playing && this.next_seek !== null) return this.next_seek;
				return Math.min(this.currentTime, this.duration());
			}
			time = Math.max(time - .01, 0);
			(async () => {
				await this.stopSynth();
				this.stopSynth = async () => {};
				this.synth_complete = false;
				this.BUFFER_QUEUE = [];
				this.waitForProcessing = true;
				this.next_seek = time;
				if (this.is_playing) this.play();
			})();
		}
	};
}));
//#endregion
//#region \0/plugin-vue/export-helper
var export_helper_default;
var init_export_helper = __esmMin((() => {
	export_helper_default = (sfc, props) => {
		const target = sfc.__vccOpts || sfc;
		for (const [key, val] of props) target[key] = val;
		return target;
	};
}));
//#endregion
//#region score-display/components/ScorePlayback.vue
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
	return i4(), le("div", _hoisted_1$3, [
		lo("button", {
			onClick: _cache[0] || (_cache[0] = (...args) => $setup.playPause && $setup.playPause(...args)),
			disabled: !$setup.loaded,
			class: "slcwd-button slcwd-playback-button slcwd-pause"
		}, [lo("i", { class: ee(["las", $setup.isPlaying ? "la-pause" : "la-play"]) }, null, 2)], 8, _hoisted_2$3),
		lo("button", {
			onWheel: _cache[1] || (_cache[1] = ol(($event) => $setup.addProgress($event.wheelDelta / 120), ["prevent"])),
			onClick: _cache[2] || (_cache[2] = (...args) => $setup.stop && $setup.stop(...args)),
			disabled: !$setup.loaded,
			class: "slcwd-button slcwd-playback-button slcwd-stop"
		}, [..._cache[5] || (_cache[5] = [lo("i", { class: "las la-stop" }, null, -1)])], 40, _hoisted_3$3),
		lo("button", {
			class: "slcwd-button",
			onClick: _cache[3] || (_cache[3] = (...args) => $setup.nextTrack && $setup.nextTrack(...args))
		}, eu($setup.currentTrack.name), 1),
		lo("div", _hoisted_4$3, eu($setup.trackNamesTooltip), 1),
		lo("div", _hoisted_5$3, [lo("div", {
			ref: "progressbar",
			class: "slcwd-playback-progressbar",
			onMousedown: _cache[4] || (_cache[4] = ol((...args) => $setup.progressMouseDown && $setup.progressMouseDown(...args), ["prevent"]))
		}, [lo("div", {
			class: "slcwd-playback-progressbar-l",
			style: G({ width: $setup.loadedRatio * 100 + "%" })
		}, null, 4), lo("div", {
			class: "slcwd-playback-progressbar-i",
			style: G({ width: $setup.progressRatio * 100 + "%" })
		}, null, 4)], 544)])
	]);
}
var import_howler, _sfc_main$4, _hoisted_1$3, _hoisted_2$3, _hoisted_3$3, _hoisted_4$3, _hoisted_5$3, ScorePlayback_default;
var init_ScorePlayback = __esmMin((() => {
	init_vue_esm_browser_prod();
	init_utils();
	import_howler = require_howler();
	init_webmscore();
	init_export_helper();
	_sfc_main$4 = {
		props: {
			tracks: Array,
			type: String,
			refAudioApi: [null, Object]
		},
		emits: ["timeChange", "focusMain"],
		setup(props, ctx) {
			if (props.refAudioApi) props.refAudioApi.value = {
				setCurrentTime: setProgress,
				getCurrentTime: getProgress,
				playPause,
				addProgress,
				nextTrack
			};
			const currentTrackIndex = tk(0);
			const currentTrack = lL(() => props.tracks[currentTrackIndex.value] ?? null);
			function nextTrack() {
				if (currentTrack.value.type == "mscz/synth") audio.value.destroy();
				currentTrackIndex.value = (currentTrackIndex.value + 1) % props.tracks.length;
			}
			const loaded = tk(false);
			const audio = lL((old_audio) => {
				loaded.value = false;
				const thisIndex = currentTrackIndex.value;
				let playing = false;
				let seek_val = 0;
				if (old_audio !== void 0) {
					if (old_audio.playing()) {
						old_audio.pause();
						playing = true;
					}
					seek_val = old_audio.seek();
				}
				const options = {
					src: [currentTrack.value.src],
					preload: "metadata",
					onload: () => {
						loaded.value = true;
						self.seek(seek_val);
						if (playing && thisIndex === currentTrackIndex.value) self.play();
					},
					onend: () => {
						self.pause();
						self.seek(self.duration());
					},
					soundfont: currentTrack.value.soundfont
				};
				let Constructor;
				switch (currentTrack.value.type) {
					case "audio":
						Constructor = import_howler.Howl;
						break;
					case "mscz/synth":
						options.mscz = currentTrack.value.mscz;
						options.excerpt = currentTrack.value.excerpt;
						options.type = props.type;
						Constructor = WebMscorePlayer;
						break;
					default:
						console.error(`Unknown track type ${currentTrack.value.type}`);
						return;
				}
				const self = new Constructor(options);
				return self;
			});
			const progressbar = tk(null);
			const isPlaying = tk(false);
			const progressRatio = tk(0);
			const loadedRatio = tk(0);
			function reportCurrent() {
				if (!audio.value) ctx.emit("timeChange", null);
				if (audio.value.playing()) ctx.emit("timeChange", audio.value.seek() ?? null);
			}
			useFrameEffect(() => {
				reportCurrent();
				if (!audio.value) return;
				if (!loaded.value) return;
				isPlaying.value = audio.value.playing();
				if (audio.value.duration() != 0) progressRatio.value = audio.value.seek() / audio.value.duration();
			});
			rT(() => {
				stop();
				if (currentTrack.value.type == "mscz/synth") audio.value.destroy();
			});
			function playPause() {
				if (!audio.value || !loaded.value) return;
				if (!audio.value.playing()) {
					if (audio.value.seek() == audio.value.duration()) audio.value.seek(0);
					audio.value.play();
				} else audio.value.pause();
			}
			function stop() {
				if (!audio.value) return;
				audio.value.pause();
				audio.value.seek(0);
				ctx.emit("timeChange", null);
			}
			function setProgress(time) {
				if (!audio.value) return;
				if (time > audio.value.duration()) time = audio.value.duration();
				if (time < 0) time = 0;
				audio.value.seek(time);
				ctx.emit("timeChange", time);
			}
			function getProgress() {
				if (!audio.value) return -1;
				return audio.value.seek();
			}
			function addProgress(time) {
				if (!audio.value) return;
				setProgress(time + audio.value.seek());
			}
			function tweakProgressOnBar(event) {
				event.preventDefault();
				if (!audio.value) return;
				if (!progressbar.value) return;
				const mouseX = event.clientX;
				const rect = progressbar.value.getBoundingClientRect();
				const currentTime = (mouseX - rect.left) / (rect.right - rect.left) * audio.value.duration();
				if (currentTime == currentTime) setProgress(currentTime);
			}
			function progressMouseDown(event) {
				ctx.emit("focusMain");
				if (!audio.value) return;
				tweakProgressOnBar(event);
				const wasPlaying = audio.value.playing();
				if (wasPlaying) audio.value.pause();
				document.addEventListener("mousemove", tweakProgressOnBar);
				function cleanup() {
					document.removeEventListener("mousemove", tweakProgressOnBar);
					document.removeEventListener("mouseup", cleanup);
					if (wasPlaying && audio.value.seek() < audio.value.duration()) audio.value.play();
				}
				document.addEventListener("mouseup", cleanup);
			}
			return {
				loaded,
				audio,
				progressbar,
				playPause,
				stop,
				isPlaying,
				progressRatio,
				loadedRatio,
				addProgress,
				progressMouseDown,
				nextTrack,
				currentTrack,
				trackNamesTooltip: lL(() => props.tracks.map((t) => t.name).join("\n"))
			};
		}
	};
	_hoisted_1$3 = { class: "slcwd-playback-controls" };
	_hoisted_2$3 = ["disabled"];
	_hoisted_3$3 = ["disabled"];
	_hoisted_4$3 = { class: "slcwd-playback-tooltip" };
	_hoisted_5$3 = { class: "slcwd-playback-progress" };
	ScorePlayback_default = /*#__PURE__*/ export_helper_default(_sfc_main$4, [["render", _sfc_render$4], ["__file", "C:\\Users\\86134\\AppData\\Local\\Temp\\msd\\score-display\\components\\ScorePlayback.vue"]]);
}));
//#endregion
//#region score-display/components/ExportPopup.vue
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
	return i4(), le("div", _hoisted_1$2, [lo("button", {
		class: "slcwd-exports-close",
		onClick: _cache[0] || (_cache[0] = (...args) => $setup.close && $setup.close(...args))
	}, [..._cache[1] || (_cache[1] = [lo("i", { class: "las la-times" }, null, -1)])]), (i4(true), le(iY, null, rL($props.downloads, (el) => {
		return i4(), le("div", null, [lo("button", {
			class: "slcwd-button",
			onClick: () => $setup.download(el)
		}, [el.errored ? (i4(), le("i", _hoisted_3$2)) : el.isLoading ? (i4(), le("i", _hoisted_4$2)) : (i4(), le("i", _hoisted_5$2)), ld(" " + eu(el.name), 1)], 8, _hoisted_2$2)]);
	}), 256))], 512);
}
var _sfc_main$3, _hoisted_1$2, _hoisted_2$2, _hoisted_3$2, _hoisted_4$2, _hoisted_5$2, ExportPopup_default;
var init_ExportPopup = __esmMin((() => {
	init_vue_esm_browser_prod();
	init_export_helper();
	_sfc_main$3 = {
		emits: ["close", "download"],
		props: { downloads: Object },
		setup(props, ctx) {
			function close() {
				ctx.emit("close");
			}
			function download(element) {
				if (element.isLoading || element.errored) return;
				element.isLoading = true;
				ctx.emit("download", element, () => {
					element.isLoading = false;
				}, () => {
					element.errored = true;
				});
			}
			return {
				close,
				download
			};
		}
	};
	_hoisted_1$2 = {
		class: "slcwd-exports",
		ref: "ref"
	};
	_hoisted_2$2 = ["onClick"];
	_hoisted_3$2 = {
		key: 0,
		class: "las la-exclamation-circle slcwd-export-error"
	};
	_hoisted_4$2 = {
		key: 1,
		class: "las la-circle-notch slcwd-spinner"
	};
	_hoisted_5$2 = {
		key: 2,
		class: "las la-file-download"
	};
	ExportPopup_default = /*#__PURE__*/ export_helper_default(_sfc_main$3, [["render", _sfc_render$3], ["__file", "C:\\Users\\86134\\AppData\\Local\\Temp\\msd\\score-display\\components\\ExportPopup.vue"]]);
}));
//#endregion
//#region score-display/components/Page.vue
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
	return i4(), le("div", _hoisted_1$1, [typeof $props.page != "string" ? (i4(), le("div", _hoisted_2$1, [lo("div", _hoisted_3$1, eu($props.id + 1), 1)])) : (i4(), le("svg", {
		key: 1,
		class: "slcwd-page-graphic",
		viewBox: $setup.svgParsed[0]
	}, [
		$setup.highlighterElement ? (i4(), le("rect", {
			key: 0,
			x: $setup.highlighterElement.pos[0],
			y: $setup.highlighterElement.pos[1],
			width: $setup.highlighterElement.size[0],
			height: $setup.highlighterElement.size[1],
			fill: "#d7e7ff"
		}, null, 8, _hoisted_5$1)) : lh("v-if", true),
		lo("g", { innerHTML: $setup.svgParsed[1] }, null, 8, _hoisted_6$1),
		(i4(true), le(iY, null, rL($setup.clickableElements, (element) => {
			return i4(), le("rect", {
				x: element.pos[0],
				y: element.pos[1],
				width: element.size[0],
				height: element.size[1],
				fill: "transparent",
				style: { cursor: "pointer" },
				onClick: () => $setup.selectElement(element.elid)
			}, null, 8, _hoisted_7$1);
		}), 256))
	], 8, _hoisted_4$1))], 512);
}
var _sfc_main$2, _hoisted_1$1, _hoisted_2$1, _hoisted_3$1, _hoisted_4$1, _hoisted_5$1, _hoisted_6$1, _hoisted_7$1, Page_default;
var init_Page = __esmMin((() => {
	init_vue_esm_browser_prod();
	init_utils();
	init_export_helper();
	_sfc_main$2 = {
		emits: ["select"],
		props: {
			id: Number,
			page: [
				null,
				Boolean,
				String
			],
			pageFormat: Object,
			highlighterElid: [null, Number],
			elementsDict: Object
		},
		setup(props, ctx) {
			const pageFormat = props.pageFormat;
			const ref = tk(null);
			useFrameEffect(() => {
				if (!ref.value) return;
				const newWidth = (ref.value.clientHeight - 2) * pageFormat.width / pageFormat.height + "px";
				if (ref.value.style.width != newWidth) {
					ref.value.style.width = newWidth;
					ref.value.style.fontSize = newWidth;
				}
			});
			const svgParsed = lL(() => {
				if (typeof props.page != "string") return null;
				const vdoc = new DOMParser().parseFromString(props.page, "image/svg+xml");
				vdoc.querySelector("svg>title").remove();
				const backgroundElement = vdoc.querySelector("desc+path[fill=\"#ffffff\"]");
				if (backgroundElement) backgroundElement.remove();
				const svg = vdoc.querySelector("svg");
				return [svg.getAttribute("viewBox"), svg.innerHTML];
			});
			const highlighterElement = lL(() => {
				if (props.highlighterElid in props.elementsDict) {
					const element = props.elementsDict[props.highlighterElid];
					if (element.page == props.id) return element;
				}
				return null;
			});
			const clickableElements = lL(() => {
				const ret = [];
				for (let id in props.elementsDict) {
					let element = props.elementsDict[id];
					if (!("page" in element)) continue;
					if (element.page == props.id) ret.push(element);
				}
				return ret;
			});
			function selectElement(elid) {
				ctx.emit("select", elid);
			}
			return {
				ref,
				svgParsed,
				highlighterElement,
				clickableElements,
				selectElement
			};
		}
	};
	_hoisted_1$1 = {
		class: "slcwd-page",
		ref: "ref"
	};
	_hoisted_2$1 = {
		key: 0,
		class: "slcwd-page-placeholder"
	};
	_hoisted_3$1 = { class: "slcwd-page-placeholder-i" };
	_hoisted_4$1 = ["viewBox"];
	_hoisted_5$1 = [
		"x",
		"y",
		"width",
		"height"
	];
	_hoisted_6$1 = ["innerHTML"];
	_hoisted_7$1 = [
		"x",
		"y",
		"width",
		"height",
		"onClick"
	];
	Page_default = /*#__PURE__*/ export_helper_default(_sfc_main$2, [["render", _sfc_render$2], ["__file", "C:\\Users\\86134\\AppData\\Local\\Temp\\msd\\score-display\\components\\Page.vue"]]);
}));
//#endregion
//#region score-display/components/PagesDisplay.vue
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_Page = rI("Page");
	const _component_ExportPopup = rI("ExportPopup");
	return i4(), le(iY, null, [
		lo("div", _hoisted_1, [
			$props.errored ? (i4(), le("div", _hoisted_2, [
				_cache[5] || (_cache[5] = lo("div", { style: {
					"font-size": "64px",
					"opacity": "0.37"
				} }, [lo("i", { class: "las la-exclamation-circle" })], -1)),
				_cache[6] || (_cache[6] = lo("p", null, "Failed to load the score.", -1)),
				lo("p", null, eu($props.errorMessage), 1)
			])) : lh("v-if", true),
			!$props.loaded && !$props.errored ? (i4(), le("div", _hoisted_3)) : lh("v-if", true),
			$props.loaded ? (i4(), le("div", _hoisted_4, [(i4(true), le(iY, null, rL($props.pages, (page, id) => {
				return i4(), lt(_component_Page, {
					id,
					page,
					pageFormat: $props.pageFormat,
					highlighterElid: $setup.highlighterElid,
					elementsDict: $props.positions.elements,
					onSelect: _cache[0] || (_cache[0] = (elid) => $setup.selectElement(elid))
				}, null, 8, [
					"id",
					"page",
					"pageFormat",
					"highlighterElid",
					"elementsDict"
				]);
			}), 256))], 512)) : lh("v-if", true)
		], 512),
		lo("div", _hoisted_5, [
			lo("button", {
				onClick: _cache[1] || (_cache[1] = (...args) => $setup.toggleAutoScroll && $setup.toggleAutoScroll(...args)),
				selected: $setup.enableAutoScroll ? "" : null,
				class: "slcwd-button"
			}, [..._cache[7] || (_cache[7] = [
				lo("i", { class: "las la-arrows-alt-h" }, null, -1),
				ld(),
				lo("span", { class: "label" }, [
					ld("Auto-"),
					lo("span", { style: { "text-decoration": "underline" } }, "s"),
					ld("croll")
				], -1)
			])], 8, _hoisted_6),
			lo("button", {
				onClick: _cache[2] || (_cache[2] = (...args) => $setup.toggleZoomed && $setup.toggleZoomed(...args)),
				selected: $setup.zoomed ? "" : null,
				class: "slcwd-button"
			}, [..._cache[8] || (_cache[8] = [
				lo("i", { class: "las la-search-plus" }, null, -1),
				ld(),
				lo("span", { class: "label" }, [lo("span", { style: { "text-decoration": "underline" } }, "Z"), ld("oom")], -1)
			])], 8, _hoisted_7),
			$props.downloads.length == 1 ? (i4(), le("button", {
				key: 0,
				onClick: _cache[3] || (_cache[3] = () => $setup.download($props.downloads[0], () => {}, () => {})),
				class: "slcwd-button"
			}, [
				_cache[9] || (_cache[9] = lo("i", { class: "las la-file-download" }, null, -1)),
				_cache[10] || (_cache[10] = ld()),
				lo("span", _hoisted_8, eu($props.downloads[0].name), 1)
			])) : lh("v-if", true),
			$props.downloads.length > 1 ? (i4(), le("button", {
				key: 1,
				class: "slcwd-button",
				onClick: _cache[4] || (_cache[4] = (...args) => $setup.openExportPopup && $setup.openExportPopup(...args))
			}, [..._cache[11] || (_cache[11] = [
				lo("i", { class: "las la-file-download" }, null, -1),
				ld(),
				lo("span", { class: "label" }, "Download", -1)
			])])) : lh("v-if", true)
		]),
		nc(la(_component_ExportPopup, {
			downloads: $props.downloads,
			onClose: $setup.closeExportPopup,
			onDownload: $setup.download
		}, null, 8, [
			"downloads",
			"onClose",
			"onDownload"
		]), [[sp, $setup.showExportPopup]])
	], 64);
}
var _sfc_main$1, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, PagesDisplay_default;
var init_PagesDisplay = __esmMin((() => {
	init_vue_esm_browser_prod();
	init_utils();
	init_ExportPopup();
	init_Page();
	init_export_helper();
	_sfc_main$1 = {
		emits: ["select"],
		props: {
			loaded: Boolean,
			errored: Boolean,
			errorMessage: String,
			pages: [null, Array],
			pageFormat: [null, Object],
			positions: [null, Object],
			audioTime: [null, Number],
			refPagesApi: [null, Object],
			downloads: [null, Array]
		},
		setup(props, ctx) {
			if (props.refPagesApi) props.refPagesApi.value = {
				toggleAutoScroll,
				toggleZoomed
			};
			const showExportPopup = tk(false);
			const ref = tk(null);
			const zoomed = tk(false);
			function toggleZoomed() {
				zoomed.value = !zoomed.value;
			}
			const innerRef = tk(null);
			useFrameEffect(function() {
				if (!ref.value) return;
				let newHeight = 0;
				if (zoomed.value) newHeight = Math.min(1350, ref.value.offsetWidth * 1.45);
				else newHeight = Math.min(1200, window.innerHeight - 160, ref.value.offsetWidth * 1.3);
				newHeight = newHeight + "px";
				if (ref.value.style.height != newHeight) ref.value.style.height = newHeight;
			});
			const highlighterIndex = { current: 0 };
			const highlighterElid = lL(() => {
				const eventList = props.positions.events;
				if (props.audioTime == null || eventList.length == 0) return null;
				let i = highlighterIndex.current;
				if (i < 0 || i >= eventList.length) i = 0;
				while (i >= 0 && props.audioTime < eventList[i].time) i -= 1;
				while (i < eventList.length - 1 && props.audioTime >= eventList[i + 1].time) i += 1;
				highlighterIndex.current = i;
				if (i < 0) return null;
				return eventList[i].elid;
			});
			const enableAutoScroll = tk(true);
			function toggleAutoScroll() {
				enableAutoScroll.value = !enableAutoScroll.value;
			}
			nm(() => {
				if (!enableAutoScroll.value) return;
				if (!innerRef.value) return;
				if (highlighterElid.value == null) return;
				const element = props.positions.elements[highlighterElid.value];
				if (!element) return;
				const parent = innerRef.value;
				const page = parent.children[element.page];
				if (!page) return;
				const viewportWidth = parent.clientWidth;
				const pageWidth = page.offsetWidth;
				const currentLeft = page.offsetLeft - parent.scrollLeft;
				const currentRight = page.offsetLeft + pageWidth - parent.scrollLeft;
				if (pageWidth <= viewportWidth ? currentLeft >= 0 && currentRight <= viewportWidth : currentLeft <= viewportWidth && currentRight >= 0) return;
				const targetLeft = Math.max(page.offsetLeft - pageWidth * .2, page.offsetLeft + pageWidth / 2 - viewportWidth / 2);
				parent.scrollTo({
					left: targetLeft,
					behavior: "smooth"
				});
			});
			function selectElement(elid) {
				const ret = [];
				for (let event of props.positions.events) if (event.elid == elid) ret.push(event.time);
				ctx.emit("select", ret);
			}
			function download(element, callback, errcallback) {
				ctx.emit("download", element, callback, errcallback);
			}
			function closeExportPopup() {
				showExportPopup.value = false;
			}
			function openExportPopup() {
				showExportPopup.value = true;
			}
			return {
				ref,
				innerRef,
				enableAutoScroll,
				zoomed,
				highlighterElid,
				selectElement,
				toggleAutoScroll,
				toggleZoomed,
				download,
				openExportPopup,
				closeExportPopup,
				showExportPopup
			};
		},
		components: {
			Page: Page_default,
			ExportPopup: ExportPopup_default
		}
	};
	_hoisted_1 = {
		class: "slcwd-pages-display",
		ref: "ref"
	};
	_hoisted_2 = {
		key: 0,
		class: "slcwd-pages-display-error"
	};
	_hoisted_3 = {
		key: 1,
		class: "slcwd-pages-display-empty"
	};
	_hoisted_4 = {
		key: 2,
		class: "slcwd-pages-display-i",
		ref: "innerRef"
	};
	_hoisted_5 = { class: "slcwd-pages-controls slcwd-button-group" };
	_hoisted_6 = ["selected"];
	_hoisted_7 = ["selected"];
	_hoisted_8 = { class: "label" };
	PagesDisplay_default = /*#__PURE__*/ export_helper_default(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:\\Users\\86134\\AppData\\Local\\Temp\\msd\\score-display\\components\\PagesDisplay.vue"]]);
}));
//#endregion
//#region score-display/components/ScoreDisplay.vue
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_PagesDisplay = rI("PagesDisplay");
	const _component_ScorePlayback = rI("ScorePlayback");
	return i4(), le("div", {
		tabindex: "0",
		ref: "refMain",
		class: "slcwd-score-display",
		onKeydown: [
			_cache[3] || (_cache[3] = oo(ol((...args) => $setup.playPause && $setup.playPause(...args), ["exact", "prevent"]), ["space"])),
			_cache[4] || (_cache[4] = oo(ol(() => $setup.addProgress(-2), ["exact", "prevent"]), ["left"])),
			_cache[5] || (_cache[5] = oo(ol(() => $setup.addProgress(2), ["exact", "prevent"]), ["right"])),
			_cache[6] || (_cache[6] = ol((...args) => $setup.handleExactKey && $setup.handleExactKey(...args), ["exact"]))
		]
	}, [
		la(_component_PagesDisplay, {
			loaded: $setup.loaded,
			errored: $setup.errored,
			errorMessage: $setup.errorMessage,
			pages: $setup.graphics,
			downloads: $setup.downloads,
			pageFormat: $setup.scoreMeta ? $setup.scoreMeta.pageFormat : null,
			positions: $setup.positions,
			audioTime: $setup.audioTime,
			onSelect: _cache[0] || (_cache[0] = (times) => $setup.selectTimes(times)),
			onDownload: $setup.download,
			refPagesApi: $setup.refPagesApi
		}, null, 8, [
			"loaded",
			"errored",
			"errorMessage",
			"pages",
			"downloads",
			"pageFormat",
			"positions",
			"audioTime",
			"onDownload",
			"refPagesApi"
		]),
		$setup.tracks_ref.length ? (i4(), lt(_component_ScorePlayback, {
			key: 0,
			tracks: $setup.tracks_ref,
			type: $props.type,
			onTimeChange: _cache[1] || (_cache[1] = (val) => $setup.audioTime = val),
			onFocusMain: _cache[2] || (_cache[2] = ($event) => $setup.refMain && $setup.refMain.focus({ preventScroll: true })),
			refAudioApi: $setup.refAudioApi
		}, null, 8, [
			"tracks",
			"type",
			"refAudioApi"
		])) : lh("v-if", true),
		rV(_ctx.$slots, "default")
	], 544);
}
var import_FileSaver_min, _sfc_main, ScoreDisplay_default;
var init_ScoreDisplay = __esmMin((() => {
	init_vue_esm_browser_prod();
	import_FileSaver_min = require_FileSaver_min();
	init_webmscore$1();
	init_wd_data();
	init_ScorePlayback();
	init_PagesDisplay();
	init_export_helper();
	_sfc_main = {
		props: {
			src: {
				type: String,
				required: true
			},
			tracks: {
				type: Array,
				required: false,
				default: () => []
			},
			type: {
				type: String,
				required: false,
				default: "wd-data"
			}
		},
		setup(props) {
			const tracks_ref = tk(props.tracks || []);
			const downloads = tk([]);
			rS(() => {
				const host = lC().proxy.$el.parentNode;
				requestAnimationFrame(() => {
					if (!props.tracks.length) {
						const trackElements = host.getElementsByTagName("score-track");
						const trackItems = Array.from(trackElements).map((el) => ({
							name: el.textContent.trim(),
							src: el.getAttribute("src") ?? null,
							type: el.getAttribute("type") ?? "audio",
							soundfont: el.getAttribute("sound-font") ?? null
						}));
						tracks_ref.value = trackItems.map((track) => {
							if (!track.type.startsWith("mscz/synth")) return track;
							track.type = track.type.split(":")[0];
							const trackId = track.type.split(":")[1];
							track.excerpt = isNaN(trackId) ? -1 : Number(trackId);
							if (!track.src && !WebMscoreSupported.includes(props.type)) {
								console.error("Could not load trackElement, no mscz given", track);
								return;
							}
							if (!track.src && loader.value != null) track.mscz = loader.value;
							track.src = track.src ?? props.src;
							return track;
						});
					}
					const downloadElements = host.getElementsByTagName("score-download");
					downloads.value = Array.from(downloadElements).map((el) => ({
						name: el.textContent.trim(),
						href: el.getAttribute("href")
					}));
				});
			});
			const refMain = tk(null);
			const scoreSrc = tk("");
			const loadToken = tk(null);
			const scoreMeta = tk(null);
			const loaded = lL(() => scoreMeta.value != null);
			const errorMessage = tk("Reload the page to try again.");
			const errored = tk(false);
			const graphics = tk(null);
			const positions = tk({
				elements: [],
				events: []
			});
			const audioTime = tk(null);
			const refAudioApi = tu({ value: null });
			const loader = tk(null);
			function selectTimes(times) {
				if (!refAudioApi.value || times.length == 0) return;
				let bestTime = -1, bestDiff = Infinity;
				for (const time of times) {
					let diff = time - refAudioApi.value.getCurrentTime();
					if (diff < 0) diff = -diff * 1;
					if (diff < bestDiff) {
						bestDiff = diff;
						bestTime = time;
					}
				}
				refAudioApi.value.setCurrentTime(bestTime);
			}
			function playPause() {
				refAudioApi.value && refAudioApi.value.playPause();
			}
			function addProgress(val) {
				refAudioApi.value && refAudioApi.value.addProgress(val);
			}
			const refPagesApi = tu({ value: null });
			function handleExactKey(event) {
				if (event.key.toLowerCase() == "s") {
					event.preventDefault();
					refPagesApi.value && refPagesApi.value.toggleAutoScroll();
				}
				if (event.key.toLowerCase() == "z") {
					event.preventDefault();
					refPagesApi.value && refPagesApi.value.toggleZoomed();
				}
			}
			nm(() => {
				if (scoreSrc.value == props.src) return;
				scoreSrc.value = props.src;
				scoreMeta.value = null;
				loadToken.value = Math.random();
				graphics.value = null;
				positions.value = {
					elements: [],
					events: []
				};
				errored.value = false;
				let token = loadToken.value;
				if (WebMscoreSupported.includes(props.type)) {
					loader.value = new WebMscoreLoader(scoreSrc.value, props.type);
					errorMessage.value = `Please note that scores written with MuseScore > v${LIB_WEBMSCORE_MAJOR} are not supported.`;
				} else if (props.type == "wd-data") loader.value = new WdDataLoader(scoreSrc.value);
				else {
					console.error(`Unknown source type  "${props.type}".`);
					errored.value = true;
				}
				loader.value.loadMetaData().then((meta) => {
					if (token != loadToken.value) return;
					if (!("pages" in meta) && "metadata" in meta) scoreMeta.value = meta.metadata;
					else scoreMeta.value = meta;
					graphics.value = Array(scoreMeta.value.pages).fill(null);
					loader.value.loadGraphics(scoreMeta.value.pages).then((gr) => {
						if (token != loadToken.value) return;
						graphics.value = gr;
						if (window.parent) window.parent.postMessage("scoreDisplay:ready", "*");
					}).catch((_err) => {
						console.warn("loading images failed.", _err);
						errored.value = true;
					});
				}).catch((_err) => {
					console.warn("metadata load failed.", _err);
					errored.value = true;
				});
				loader.value.loadPos(false).then((positions_json) => {
					if (token != loadToken.value) return;
					positions.value = positions_json;
				}).catch((_err) => console.warn("events positions load failed.", _err));
			});
			rT(() => {
				if (loader.value) loader.value.destroy();
			});
			async function download(element, callback, errcallback) {
				try {
					let dataLoc = element.href;
					let filename = null;
					if (dataLoc.startsWith("mscz/export:")) {
						if (!WebMscoreSupported.includes(props.type)) throw "Could not save file, score is not loaded from websmcore";
						if (loader.value == null) throw "Loader not available.";
						const exportFormat = dataLoc.split(":")[1];
						const data = await loader.value.exportAs(exportFormat);
						filename = `${scoreMeta.value.title}.${exportFormat}`;
						dataLoc = new Blob([data]);
					} else filename = element.href.substr(element.href.lastIndexOf("/") + 1);
					(0, import_FileSaver_min.saveAs)(dataLoc, filename);
					callback();
				} catch (error) {
					console.error(`While exporting for "${element.name}" : ${error}`);
					errcallback();
				}
			}
			return {
				refMain,
				scoreMeta,
				loaded,
				errored,
				graphics,
				positions,
				audioTime,
				refAudioApi,
				selectTimes,
				playPause,
				addProgress,
				refPagesApi,
				handleExactKey,
				tracks_ref,
				downloads,
				errorMessage,
				download
			};
		},
		components: {
			PagesDisplay: PagesDisplay_default,
			ScorePlayback: ScorePlayback_default
		}
	};
	ScoreDisplay_default = /*#__PURE__*/ export_helper_default(_sfc_main, [["render", _sfc_render], ["__file", "C:\\Users\\86134\\AppData\\Local\\Temp\\msd\\score-display\\components\\ScoreDisplay.vue"]]);
}));
//#endregion
//#region score-display/score-display.global.js
var require_score_display_global = /* @__PURE__ */ __commonJSMin((() => {
	init_vue_esm_browser_prod();
	init_ScoreDisplay();
	/** Simply load a stylesheet */
	function loadStylesheet(href) {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = href;
		document.head.appendChild(link);
	}
	loadStylesheet(import.meta.url.substr(0, import.meta.url.lastIndexOf("/")) + "/style/line-awesome/css/line-awesome.min.css");
	var TrackElement = class extends HTMLElement {
		connectedCallback() {
			this.style.display = "none";
		}
	};
	var DownloadElement = class extends HTMLElement {
		connectedCallback() {
			this.style.display = "none";
		}
	};
	customElements.define("score-track", TrackElement);
	customElements.define("score-download", DownloadElement);
	customElements.define("score-display", sM(ScoreDisplay_default, { shadowRoot: false }));
}));
//#endregion
export default require_score_display_global();
