// t.js - T-Code input method data
// 
// Copyright (C) 2005, 2006  YUSE Yosihiro
// 
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA


{
  var im = new Object();

  // ===================================================================
  // config

  im.id = "T";
  im.title = "T-Code";

  var o = im.encodetable = new Object();

  o["��"] = "jd";
  o["��"] = "hf";
  o["��"] = "lf";
  o["��"] = "3.";
  o["��"] = "te";
  o["��"] = "fw";
  o["��"] = "ka";
  o["��"] = "hs";
  o["��"] = "kc";
  o["��"] = ",m";
  o["��"] = "ke";
  o["��"] = "id";
  o["��"] = ",g";
  o["��"] = "jv";
  o["��"] = "bz";
  o["��"] = "kf";
  o["��"] = ";d";
  o["��"] = ";f";
  o["��"] = "ha";
  o["��"] = "ud";
  o["��"] = "ld";
  o["��"] = "if";
  o["��"] = "he";
  o["��"] = "kt";
  o["��"] = "kv";
  o["��"] = "1z";
  o["��"] = "yf";
  o["��"] = "1x";
  o["��"] = "hd";
  o["��"] = "1c";
  o["��"] = "yd";
  o["��"] = "1v";
  o["��"] = "lt";
  o["��"] = "1b";
  o["��"] = "oa";
  o["��"] = "je";
  o["��"] = ";s";
  o["��"] = "hr";
  o["��"] = "qf";
  o["��"] = "jt";
  o["��"] = "dt";
  o["��"] = "nf";
  o["��"] = "/z";
  o["��"] = "uf";
  o["��"] = "/k";
  o["��"] = "ug";
  o["��"] = "fo";
  o["��"] = "js";
  o["��"] = "ux";
  o["��"] = ",f";
  o["��"] = ",z";
  o["��"] = "uw";
  o["��"] = ";3";
  o["��"] = ";b";
  o["��"] = ".u";
  o["��"] = "ks";
  o["��"] = "hc";
  o["��"] = "/a";
  o["��"] = "8v";
  o["��"] = "jr";
  o["��"] = ".d";
  o["��"] = "ek";
  o["��"] = "la";
  o["��"] = "hg";
  o["��"] = "ja";
  o["��"] = "kq";
  o["��"] = "lg";
  o["��"] = "kg";
  o["��"] = "a.";
  o["��"] = "fd";
  o["��"] = "kd";
  o["��"] = "jg";
  o["��"] = ",w";
  o["��"] = "1a";
  o["��"] = "m.";
  o["��"] = "jo";
  o["��"] = "1s";
  o["��"] = "rs";
  o["��"] = "sb";
  o["��"] = "1d";
  o["��"] = ";;";
  o["��"] = "yl";
  o["��"] = "1f";
  o["��"] = "pz";
  o["��"] = "cm";
  o["��"] = "1g";
  o["��"] = "md";
  o["��"] = "/g";
  o["��"] = "yh";
  o["��"] = "lc";
  o["��"] = "ia";
  o["��"] = "tt";
  o["��"] = "ye";
  o["��"] = "q.";
  o["��"] = "cc";
  o["��"] = ",.";
  o["��"] = "jw";
  o["��"] = "ig";
  o["��"] = "jc";
  o["��"] = ";a";
  o["��"] = ";e";
  o["��"] = "ps";
  o["��"] = "a1";
  o["��"] = "ys";
  o["��"] = "s1";
  o["��"] = "d1";
  o["��"] = ";g";
  o["��"] = "nd";
  o["��"] = "zi";
  o["��"] = ";w";
  o["��"] = "po";
  o["��"] = "mf";
  o["��"] = "1w";
  o["��"] = ".x";
  o["��"] = "td";
  o["��"] = "kk";
  o["��"] = "mu";
  o["��"] = "/c";
  o["��"] = "jx";
  o["��"] = "mk";
  o["��"] = "yw";
  o["��"] = "bx";
  o["��"] = "ms";
  o["��"] = "/x";
  o["��"] = "yj";
  o["��"] = "tn";
  o["��"] = "yr";
  o["��"] = "mj";
  o["��"] = "nt";
  o["��"] = "g,";
  o["��"] = "pg";
  o["��"] = ";z";
  o["��"] = "ua";
  o["��"] = "//";
  o["��"] = "hi";
  o["��"] = "vn";
  o["��"] = "il";
  o["��"] = "u;";
  o["��"] = "ie";
  o["��"] = "ok";
  o["��"] = "/r";
  o["��"] = "1r";
  o["��"] = "na";
  o["��"] = "ki";
  o["��"] = "1t";
  o["��"] = ".e";
  o["��"] = "hk";
  o["��"] = "le";
  o["��"] = "jz";
  o["��"] = "yt";
  o["��"] = "ov";
  o["��"] = "k/";
  o["��"] = "mm";
  o["��"] = "nl";
  o["��"] = "lm";
  o["��"] = "yc";
  o["��"] = ",t";
  o["��"] = "za";
  o["��"] = ",v";
  o["��"] = "m/";
  o["��"] = "/s";
  o["��"] = ",h";
  o["��"] = "mw";
  o["��"] = "m3";
  o["��"] = ";j";
  o["��"] = "rt";
  o["��"] = "nh";
  o["��"] = "sg";
  o["��"] = "k,";
  o["��"] = "it";
  o["��"] = ";,";
  o["��"] = "ub";
  o["��"] = ",x";
  o["��"] = "yo";
  o["��"] = ";o";
  o["��"] = "nn";
  o["��"] = ".w";
  o["��"] = "o.";
  o["��"] = ".;";
  o["��"] = "zz";
  o["��"] = "us";
  o["��"] = "pd";
  o["��"] = "kw";
  o["��"] = ";q";
  o["��"] = "ns";
  o["��"] = "q1";
  o["��"] = "oi";
  o["��"] = "w1";
  o["��"] = "e1";
  o["��"] = "1q";
  o["��"] = ",d";
  o["��"] = "1e";
  o["��"] = "r1";
  o["��"] = "t1";
  o["��"] = "g6";
  o["��"] = "5l";
  o["��"] = "2q";
  o["��"] = "fh";
  o["��"] = "2w";
  o["��"] = "xp";
  o["��"] = "i4";
  o["��"] = "w9";
  o["��"] = "2e";
  o["��"] = "lu";
  o["��"] = "2t";
  o["��"] = "ae";
  o["��"] = "j/";
  o["��"] = "sx";
  o["��"] = "gq";
  o["��"] = "n1";
  o["��"] = "2r";
  o["��"] = "nv";
  o["��"] = ".n";
  o["��"] = "2a";
  o["��"] = "8r";
  o["��"] = "2s";
  o["��"] = "8w";
  o["��"] = "r6";
  o["��"] = "f7";
  o["��"] = "2g";
  o["��"] = "0c";
  o["��"] = "sp";
  o["��"] = "t0";
  o["��"] = "on";
  o["��"] = "ky";
  o["��"] = "l2";
  o["��"] = "ff";
  o["��"] = "ls";
  o["��"] = "9q";
  o["��"] = "go";
  o["��"] = "jq";
  o["��"] = "ct";
  o["��"] = "fe";
  o["��"] = "gc";
  o["��"] = "2d";
  o["��"] = "2f";
  o["��"] = "tl";
  o["��"] = "vr";
  o["��"] = "un";
  o["��"] = "tx";
  o["��"] = "q2";
  o["��"] = "w2";
  o["��"] = "i.";
  o["��"] = "ji";
  o["��"] = "4;";
  o["��"] = "l/";
  o["��"] = "9b";
  o["��"] = "j;";
  o["��"] = "t2";
  o["��"] = "f,";
  o["��"] = "xj";
  o["��"] = "ag";
  o["��"] = "d;";
  o["��"] = "h2";
  o["��"] = "oh";
  o["��"] = "th";
  o["��"] = "kz";
  o["��"] = "ra";
  o["��"] = "e2";
  o["��"] = "8t";
  o["��"] = "j2";
  o["��"] = ";p";
  o["��"] = "r2";
  o["��"] = "nu";
  o["��"] = "r7";
  o["��"] = "a2";
  o["��"] = "s2";
  o["��"] = "cb";
  o["��"] = "xt";
  o["��"] = "gw";
  o["��"] = "p5";
  o["��"] = "ar";
  o["��"] = "s6";
  o["��"] = "sw";
  o["��"] = "e4";
  o["��"] = "sa";
  o["��"] = "an";
  o["��"] = "ip";
  o["��"] = "d2";
  o["��"] = "4l";
  o["��"] = "l1";
  o["��"] = "f2";
  o["��"] = "aw";
  o["��"] = ",b";
  o["��"] = "mv";
  o["��"] = "co";
  o["��"] = "..";
  o["��"] = "dg";
  o["��"] = "l;";
  o["��"] = "xq";
  o["��"] = "mq";
  o["��"] = "gs";
  o["��"] = "3q";
  o["��"] = "qq";
  o["��"] = "q;";
  o["��"] = "tf";
  o["��"] = "d,";
  o["��"] = "i,";
  o["��"] = "c;";
  o["��"] = "4j";
  o["��"] = "c/";
  o["��"] = "3a";
  o["��"] = "3w";
  o["��"] = ";u";
  o["��"] = "u2";
  o["��"] = "e,";
  o["��"] = "kb";
  o["��"] = "op";
  o["��"] = "uq";
  o["��"] = "3e";
  o["��"] = "1i";
  o["��"] = "du";
  o["��"] = "qx";
  o["��"] = "nz";
  o["��"] = ",n";
  o["��"] = "pq";
  o["��"] = "wr";
  o["��"] = "m;";
  o["��"] = "qy";
  o["��"] = "qw";
  o["��"] = "vm";
  o["��"] = "/l";
  o["��"] = "0r";
  o["��"] = "wf";
  o["��"] = "8b";
  o["��"] = "gp";
  o["��"] = "gr";
  o["��"] = "tu";
  o["��"] = "3r";
  o["��"] = "j1";
  o["��"] = "of";
  o["��"] = "1;";
  o["��"] = "/h";
  o["��"] = "f;";
  o["��"] = "3s";
  o["��"] = "x0";
  o["��"] = "ab";
  o["��"] = "dd";
  o["��"] = "/b";
  o["��"] = "3z";
  o["��"] = "3t";
  o["��"] = "wx";
  o["��"] = "i/";
  o["��"] = "ml";
  o["��"] = "ft";
  o["��"] = "m4";
  o["��"] = "i3";
  o["��"] = "3g";
  o["��"] = "cx";
  o["��"] = "gz";
  o["��"] = "7t";
  o["��"] = "3d";
  o["��"] = "8z";
  o["��"] = "l4";
  o["��"] = "pm";
  o["��"] = "3f";
  o["��"] = "qm";
  o["��"] = "5,";
  o["��"] = "gh";
  o["��"] = "1y";
  o["��"] = "fl";
  o["��"] = "1/";
  o["��"] = "uv";
  o["��"] = "oj";
  o["��"] = "dq";
  o["��"] = "ed";
  o["��"] = "vz";
  o["��"] = "i2";
  o["��"] = "1k";
  o["��"] = ",y";
  o["��"] = "ve";
  o["��"] = "v7";
  o["��"] = "so";
  o["��"] = "r8";
  o["��"] = "u3";
  o["��"] = "vc";
  o["��"] = "ak";
  o["��"] = "a3";
  o["��"] = "wm";
  o["��"] = "8d";
  o["��"] = "c9";
  o["��"] = "s3";
  o["��"] = "y;";
  o["��"] = ".r";
  o["��"] = "qn";
  o["��"] = "nb";
  o["��"] = "6t";
  o["��"] = "5k";
  o["��"] = "6x";
  o["��"] = "xx";
  o["��"] = "yi";
  o["��"] = "eh";
  o["��"] = "q3";
  o["��"] = "fx";
  o["��"] = "7v";
  o["��"] = "xd";
  o["��"] = "ox";
  o["��"] = "d3";
  o["��"] = "xc";
  o["��"] = "d8";
  o["��"] = "f3";
  o["��"] = "xl";
  o["��"] = "ao";
  o["��"] = "o3";
  o["��"] = "xs";
  o["��"] = "zb";
  o["��"] = "zs";
  o["��"] = "ax";
  o["��"] = "ou";
  o["��"] = "dx";
  o["��"] = "gt";
  o["��"] = "e.";
  o["��"] = "bg";
  o["��"] = "hq";
  o["��"] = "0w";
  o["��"] = "f0";
  o["��"] = "6v";
  o["��"] = "vw";
  o["��"] = ".y";
  o["��"] = "xn";
  o["��"] = "w3";
  o["��"] = "o,";
  o["��"] = "p2";
  o["��"] = "g9";
  o["��"] = "g3";
  o["��"] = ".a";
  o["��"] = "e;";
  o["��"] = "o/";
  o["��"] = "mh";
  o["��"] = "jn";
  o["��"] = "u1";
  o["��"] = "o;";
  o["��"] = "ev";
  o["��"] = "kj";
  o["��"] = "pk";
  o["��"] = "tv";
  o["��"] = "e3";
  o["��"] = "r3";
  o["��"] = "sr";
  o["��"] = "t6";
  o["��"] = "ym";
  o["��"] = "t3";
  o["��"] = "ng";
  o["��"] = "ac";
  o["��"] = "se";
  o["��"] = "rc";
  o["��"] = "rl";
  o["��"] = "lo";
  o["��"] = ".4";
  o["��"] = "z6";
  o["��"] = "8s";
  o["��"] = ";4";
  o["��"] = "n;";
  o["��"] = "ut";
  o["��"] = "h/";
  o["��"] = "nr";
  o["��"] = "v6";
  o["��"] = "iw";
  o["��"] = "u4";
  o["��"] = "r,";
  o["��"] = "xg";
  o["��"] = "pl";
  o["��"] = "6f";
  o["��"] = "t7";
  o["��"] = "cf";
  o["��"] = "8x";
  o["��"] = "p;";
  o["��"] = "2;";
  o["��"] = "4q";
  o["��"] = "f.";
  o["��"] = "sj";
  o["��"] = "o4";
  o["��"] = "x8";
  o["��"] = "4w";
  o["��"] = "4e";
  o["��"] = "k3";
  o["��"] = "i1";
  o["��"] = "oc";
  o["��"] = "m,";
  o["��"] = "d.";
  o["��"] = "ry";
  o["��"] = "gu";
  o["��"] = "u,";
  o["��"] = "4r";
  o["��"] = "qu";
  o["��"] = "n4";
  o["��"] = "zq";
  o["��"] = "l,";
  o["��"] = "da";
  o["��"] = "m5";
  o["��"] = "pf";
  o["��"] = "az";
  o["��"] = "vi";
  o["��"] = "4a";
  o["��"] = "zp";
  o["��"] = "4s";
  o["��"] = "mt";
  o["��"] = "3p";
  o["��"] = "fy";
  o["��"] = "ba";
  o["��"] = "4f";
  o["��"] = "5.";
  o["��"] = "si";
  o["��"] = "z7";
  o["��"] = "bd";
  o["��"] = "9g";
  o["��"] = "/e";
  o["��"] = "4t";
  o["��"] = "cn";
  o["��"] = "4d";
  o["��"] = "pu";
  o["��"] = "gb";
  o["��"] = "ih";
  o["��"] = "4g";
  o["��"] = "to";
  o["��"] = "c7";
  o["��"] = "jk";
  o["��"] = "gl";
  o["��"] = "ai";
  o["��"] = "in";
  o["��"] = "wt";
  o["��"] = "6z";
  o["��"] = "p4";
  o["��"] = "q4";
  o["��"] = "0h";
  o["��"] = "v,";
  o["��"] = "n.";
  o["��"] = "qp";
  o["��"] = "q6";
  o["��"] = "w4";
  o["��"] = ";v";
  o["��"] = "0t";
  o["��"] = "/j";
  o["��"] = "yv";
  o["��"] = "cr";
  o["��"] = "lp";
  o["��"] = "xz";
  o["��"] = "p/";
  o["��"] = "t9";
  o["��"] = ";m";
  o["��"] = "3u";
  o["��"] = "/;";
  o["��"] = "jp";
  o["��"] = "9z";
  o["��"] = ".o";
  o["��"] = "ce";
  o["��"] = ".m";
  o["��"] = "av";
  o["��"] = "r4";
  o["��"] = "sk";
  o["��"] = "me";
  o["��"] = "a4";
  o["��"] = "ti";
  o["��"] = "eg";
  o["��"] = "h3";
  o["��"] = "q0";
  o["��"] = "9x";
  o["��"] = "6e";
  o["��"] = "2/";
  o["��"] = ".k";
  o["��"] = "xu";
  o["��"] = "xa";
  o["��"] = "rk";
  o["��"] = "3h";
  o["��"] = "a7";
  o["��"] = "z0";
  o["��"] = "t4";
  o["��"] = "va";
  o["��"] = "e/";
  o["��"] = ";2";
  o["��"] = "hz";
  o["��"] = "dh";
  o["��"] = "wp";
  o["��"] = ".3";
  o["��"] = "/2";
  o["��"] = "og";
  o["��"] = "cv";
  o["��"] = "mc";
  o["��"] = "d7";
  o["��"] = "s4";
  o["��"] = "3,";
  o["��"] = "wq";
  o["��"] = "lr";
  o["��"] = "fc";
  o["��"] = "xe";
  o["��"] = "zf";
  o["��"] = "ck";
  o["��"] = "/n";
  o["��"] = "f4";
  o["��"] = "d4";
  o["��"] = "g4";
  o["��"] = "a/";
  o["��"] = "j,";
  o["��"] = "yy";
  o["��"] = "a,";
  o["��"] = "bw";
  o["��"] = "es";
  o["��"] = "t8";
  o["��"] = "uk";
  o["��"] = "9a";
  o["��"] = "nm";
  o["��"] = "iu";
  o["��"] = "vq";
  o["��"] = "rb";
  o["��"] = "6d";
  o["��"] = "i;";
  o["��"] = "zc";
  o["��"] = "2m";
  o["��"] = "qt";
  o["��"] = "em";
  o["��"] = "wa";
  o["��"] = "re";
  o["��"] = "x/";
  o["��"] = "5p";
  o["��"] = "zw";
  o["��"] = "b;";
  o["��"] = "at";
  o["��"] = "/w";
  o["��"] = "en";
  o["��"] = "eq";
  o["��"] = "7y";
  o["��"] = "6a";
  o["��"] = "7u";
  o["��"] = "q8";
  o["��"] = "0d";
  o["��"] = "r9";
  o["��"] = "zo";
  o["��"] = "k4";
  o["��"] = "7i";
  o["��"] = ",a";
  o["��"] = "gd";
  o["��"] = "ur";
  o["��"] = ",5";
  o["��"] = "pv";
  o["��"] = "cd";
  o["��"] = "7o";
  o["��"] = "6q";
  o["��"] = "we";
  o["��"] = "gm";
  o["��"] = "vg";
  o["��"] = "dr";
  o["��"] = "y,";
  o["��"] = "om";
  o["��"] = "/d";
  o["��"] = "io";
  o["��"] = "wc";
  o["��"] = "y5";
  o["��"] = "lv";
  o["��"] = "/v";
  o["��"] = "cl";
  o["��"] = "q/";
  o["��"] = "qg";
  o["��"] = "qd";
  o["��"] = "hn";
  o["��"] = "vu";
  o["��"] = "f/";
  o["��"] = "tw";
  o["��"] = "wd";
  o["��"] = "nj";
  o["��"] = "ei";
  o["��"] = "sq";
  o["��"] = "/o";
  o["��"] = "r;";
  o["��"] = "3k";
  o["��"] = "uo";
  o["��"] = "3i";
  o["��"] = "hb";
  o["��"] = "rp";
  o["��"] = "z/";
  o["��"] = "qk";
  o["��"] = "uz";
  o["��"] = "mg";
  o["��"] = "ef";
  o["��"] = "8h";
  o["��"] = ";/";
  o["��"] = "np";
  o["��"] = "no";
  o["��"] = "ix";
  o["��"] = "4.";
  o["��"] = "3j";
  o["��"] = "uj";
  o["��"] = "8c";
  o["��"] = "ib";
  o["��"] = "1l";
  o["��"] = "t,";
  o["��"] = "fg";
  o["��"] = "8j";
  o["��"] = "wk";
  o["��"] = ";y";
  o["��"] = "tm";
  o["��"] = "y3";
  o["��"] = "gx";
  o["��"] = "8y";
  o["��"] = "kx";
  o["��"] = "ir";
  o["��"] = "hl";
  o["��"] = ",1";
  o["��"] = "g0";
  o["��"] = "qs";
  o["��"] = "3;";
  o["��"] = "h;";
  o["��"] = "fs";
  o["��"] = "ez";
  o["��"] = "oe";
  o["��"] = "1h";
  o["��"] = "aa";
  o["��"] = "vt";
  o["��"] = "rq";
  o["��"] = "af";
  o["��"] = "w8";
  o["��"] = "mo";
  o["��"] = "c6";
  o["��"] = "8u";
  o["��"] = "qa";
  o["��"] = "k2";
  o["��"] = "4y";
  o["��"] = "z9";
  o["��"] = "z,";
  o["��"] = "w.";
  o["��"] = "wi";
  o["��"] = "cp";
  o["��"] = "wh";
  o["��"] = "rf";
  o["��"] = "h5";
  o["��"] = "8i";
  o["��"] = "xv";
  o["��"] = "ku";
  o["��"] = "ob";
  o["��"] = "s8";
  o["��"] = "od";
  o["��"] = "ze";
  o["��"] = "g;";
  o["��"] = ",l";
  o["��"] = "hu";
  o["��"] = "ss";
  o["��"] = "ue";
  o["��"] = "wg";
  o["��"] = "4n";
  o["��"] = "ri";
  o["��"] = "8o";
  o["��"] = "v.";
  o["��"] = "8p";
  o["��"] = "7f";
  o["��"] = "e8";
  o["��"] = "l3";
  o["��"] = "fz";
  o["��"] = "oz";
  o["��"] = "y8";
  o["��"] = "k;";
  o["��"] = "v/";
  o["��"] = "dj";
  o["��"] = "pt";
  o["��"] = "ni";
  o["��"] = ";5";
  o["��"] = "s7";
  o["��"] = "a6";
  o["��"] = ",/";
  o["��"] = "km";
  o["��"] = "1p";
  o["��"] = ",u";
  o["��"] = "lz";
  o["��"] = "gg";
  o["��"] = "y2";
  o["��"] = "1u";
  o["��"] = "4k";
  o["��"] = "fu";
  o["��"] = "2.";
  o["��"] = "gn";
  o["��"] = "c8";
  o["��"] = "7e";
  o["��"] = "bc";
  o["��"] = "xb";
  o["��"] = "x6";
  o["��"] = "o8";
  o["��"] = "2u";
  o["��"] = ".5";
  o["��"] = "u8";
  o["��"] = "2l";
  o["��"] = "cz";
  o["��"] = "ew";
  o["��"] = "p1";
  o["��"] = "ts";
  o["��"] = "0a";
  o["��"] = "ht";
  o["��"] = "i8";
  o["��"] = "c,";
  o["��"] = "iv";
  o["��"] = "qj";
  o["��"] = "de";
  o["��"] = "tk";
  o["��"] = "b,";
  o["��"] = "p8";
  o["��"] = "n3";
  o["��"] = "w7";
  o["��"] = "5y";
  o["��"] = "n2";
  o["��"] = "ge";
  o["��"] = "am";
  o["��"] = "3y";
  o["��"] = ".,";
  o["��"] = "bt";
  o["��"] = ".j";
  o["��"] = "5o";
  o["��"] = "su";
  o["��"] = "mn";
  o["��"] = "mi";
  o["��"] = "hv";
  o["��"] = "t/";
  o["��"] = "cj";
  o["��"] = "ga";
  o["��"] = "ho";
  o["��"] = "vh";
  o["��"] = "n/";
  o["��"] = "fa";
  o["��"] = "xw";
  o["��"] = "q9";
  o["��"] = "ma";
  o["��"] = "8k";
  o["��"] = "1j";
  o["��"] = ".1";
  o["��"] = "zn";
  o["��"] = "7k";
  o["��"] = "br";
  o["��"] = "kh";
  o["��"] = "7l";
  o["��"] = "7h";
  o["��"] = "iy";
  o["��"] = "7j";
  o["��"] = "k5";
  o["��"] = "7;";
  o["��"] = "ll";
  o["��"] = "7a";
  o["��"] = "ju";
  o["��"] = "ah";
  o["��"] = "cg";
  o["��"] = "jl";
  o["��"] = ".c";
  o["��"] = "ey";
  o["��"] = "u7";
  o["��"] = ";n";
  o["��"] = "bf";
  o["��"] = "os";
  o["��"] = "h1";
  o["��"] = "do";
  o["��"] = "sy";
  o["��"] = ",k";
  o["��"] = ".z";
  o["��"] = "y1";
  o["��"] = "vf";
  o["��"] = "pn";
  o["��"] = "vl";
  o["��"] = "t;";
  o["��"] = "ny";
  o["��"] = "i7";
  o["��"] = "up";
  o["��"] = "qo";
  o["��"] = "7c";
  o["��"] = "o2";
  o["��"] = "dn";
  o["��"] = "rn";
  o["��"] = "df";
  o["��"] = "yu";
  o["��"] = "wu";
  o["��"] = "jh";
  o["��"] = "j5";
  o["��"] = "zv";
  o["��"] = "9t";
  o["��"] = "u5";
  o["��"] = "hm";
  o["��"] = "lw";
  o["��"] = "3/";
  o["��"] = "p7";
  o["��"] = "ch";
  o["��"] = ",r";
  o["��"] = "ij";
  o["��"] = "xk";
  o["��"] = "yn";
  o["��"] = "ik";
  o["��"] = "m1";
  o["��"] = "ta";
  o["��"] = "j.";
  o["��"] = "o7";
  o["��"] = "b9";
  o["��"] = "lb";
  o["��"] = "bq";
  o["��"] = "fp";
  o["��"] = "yx";
  o["��"] = "b6";
  o["��"] = "zh";
  o["��"] = "h.";
  o["��"] = "r0";
  o["��"] = "h7";
  o["��"] = "c0";
  o["��"] = "gv";
  o["��"] = "k7";
  o["��"] = "r/";
  o["��"] = "fn";
  o["��"] = "7w";
  o["��"] = "d9";
  o["��"] = "vs";
  o["��"] = "j7";
  o["��"] = "2n";
  o["��"] = "gk";
  o["��"] = "nq";
  o["��"] = "5;";
  o["��"] = "/,";
  o["��"] = "sl";
  o["��"] = "dp";
  o["��"] = "/3";
  o["��"] = "pi";
  o["��"] = "tr";
  o["¢"] = "cs";
  o["¤"] = "bs";
  o["¦"] = "fr";
  o["§"] = "a0";
  o["¨"] = "mp";
  o["¬"] = "n5";
  o["­"] = "al";
  o["®"] = "9r";
  o["°"] = "9c";
  o["²"] = "qb";
  o["³"] = "rd";
  o["´"] = "dz";
  o["¸"] = "s0";
  o["º"] = "l7";
  o["¼"] = "nk";
  o["¾"] = "lk";
  o["¿"] = "jm";
  o["��"] = "ea";
  o["��"] = "9u";
  o["��"] = "ko";
  o["��"] = ";.";
  o["��"] = ".q";
  o["��"] = "7r";
  o["��"] = "ds";
  o["��"] = "s,";
  o["��"] = "1.";
  o["��"] = "vj";
  o["��"] = "sm";
  o["��"] = "tz";
  o["��"] = "ru";
  o["��"] = "lq";
  o["��"] = "/m";
  o["��"] = ";c";
  o["��"] = ".t";
  o["��"] = "jy";
  o["��"] = "as";
  o["��"] = "l.";
  o["��"] = "xf";
  o["��"] = "9y";
  o["ã"] = "rm";
  o["æ"] = "g7";
  o["ë"] = ";i";
  o["ï"] = "g.";
  o["ð"] = "v9";
  o["ñ"] = "b/";
  o["ô"] = "y/";
  o["õ"] = "o1";
  o["ú"] = "8q";
  o["û"] = "my";
  o["ü"] = "q7";
  o["��"] = "n,";
  o["��"] = "eo";
  o["��"] = "s;";
  o["��"] = "pj";
  o["��"] = "py";
  o["��"] = "vx";
  o["��"] = "ii";
  o["��"] = "/f";
  o["��"] = "gf";
  o["��"] = "w;";
  o["��"] = "4h";
  o["��"] = "2h";
  o["��"] = "dl";
  o["��"] = "q,";
  o["��"] = "9i";
  o["��"] = "cy";
  o["��"] = "v;";
  o["��"] = "ya";
  o["��"] = "xy";
  o["��"] = "9s";
  o["��"] = "7q";
  o["��"] = "w,";
  o["��"] = "9p";
  o["��"] = "x9";
  o["��"] = "e6";
  o["��"] = "9o";
  o["��"] = "wb";
  o["Ģ"] = "p9";
  o["ģ"] = "wn";
  o["ĥ"] = "wj";
  o["ħ"] = "2y";
  o["ī"] = "ui";
  o["Į"] = "iz";
  o["Ĵ"] = "h,";
  o["Ĺ"] = ".g";
  o["Ļ"] = "8a";
  o["ľ"] = "fv";
  o["��"] = "9h";
  o["��"] = "wy";
  o["��"] = "c.";
  o["��"] = "eu";
  o["��"] = "w0";
  o["��"] = "hx";
  o["��"] = "/u";
  o["��"] = "9l";
  o["��"] = "2j";
  o["��"] = "ro";
  o["��"] = "ql";
  o["��"] = "pa";
  o["��"] = "qc";
  o["��"] = "f6";
  o["��"] = "x;";
  o["��"] = "ep";
  o["��"] = "wo";
  o["Ū"] = ",q";
  o["Ŭ"] = "zr";
  o["Ű"] = "9k";
  o["Ŵ"] = "jj";
  o["ŵ"] = "6s";
  o["ŷ"] = "kl";
  o["Ÿ"] = "s.";
  o["Ź"] = "yz";
  o["ź"] = "9j";
  o["ž"] = "zg";
  o["��"] = "ol";
  o["��"] = "z;";
  o["��"] = "jb";
  o["��"] = ".f";
  o["��"] = "j3";
  o["��"] = "wz";
  o["��"] = "rz";
  o["��"] = "4u";
  o["��"] = ".b";
  o["��"] = "d6";
  o["��"] = ";k";
  o["��"] = "sd";
  o["��"] = "s9";
  o["��"] = "k.";
  o["��"] = "oq";
  o["��"] = "zd";
  o["��"] = "is";
  o["��"] = "0z";
  o["��"] = "0q";
  o["��"] = "nx";
  o["��"] = "zk";
  o["��"] = "r.";
  o["��"] = "p3";
  o["��"] = "fi";
  o["ƣ"] = "lh";
  o["Ƥ"] = "im";
  o["Ʀ"] = "4,";
  o["ƨ"] = "4o";
  o["ƫ"] = "9;";
  o["Ƭ"] = "sc";
  o["Ʈ"] = "8e";
  o["Ư"] = "/i";
  o["ư"] = "pc";
  o["Ʊ"] = ";x";
  o["Ʋ"] = "g/";
  o["Ƴ"] = "xi";
  o["Ʒ"] = "8;";
  o["ƻ"] = "mz";
  o["��"] = "tj";
  o["��"] = "qz";
  o["��"] = "li";
  o["��"] = "rv";
  o["��"] = "d/";
  o["��"] = "qv";
  o["��"] = "k1";
  o["��"] = "9e";
  o["��"] = "ne";
  o["��"] = "uh";
  o["��"] = ",p";
  o["��"] = ";r";
  o["��"] = "o9";
  o["��"] = "l5";
  o["��"] = "kr";
  o["��"] = "0s";
  o["��"] = "/t";
  o["ǡ"] = "i9";
  o["Ǥ"] = "dy";
  o["ǧ"] = "ci";
  o["Ǯ"] = "tc";
  o["ǯ"] = ";t";
  o["ǰ"] = ".i";
  o["ǵ"] = "u9";
  o["Ƿ"] = "zm";
  o["Ǽ"] = "2o";
  o["ǽ"] = "er";
  o["Ǿ"] = "4m";
  o["��"] = "tq";
  o["��"] = "0l";
  o["��"] = "5q";
  o["��"] = "bn";
  o["��"] = "bv";
  o["��"] = "7x";
  o["��"] = "/y";
  o["��"] = "v0";
  o["��"] = "dc";
  o["��"] = "d0";
  o["��"] = "ww";
  o["��"] = "mb";
  o["��"] = "7s";
  o["��"] = "st";
  o["��"] = "1m";
  o["��"] = "zy";
  o["Ȣ"] = "4/";
  o["Ȩ"] = "0x";
  o["Ȭ"] = ",e";
  o["ȯ"] = "or";
  o["Ȳ"] = "5w";
  o["ȴ"] = "w/";
  o["Ƚ"] = "zx";
  o["Ⱦ"] = "vd";
  o["ȿ"] = "./";
  o["��"] = "zl";
  o["��"] = "5h";
  o["��"] = ",o";
  o["��"] = "6g";
  o["��"] = "2k";
  o["��"] = "bo";
  o["��"] = "5t";
  o["��"] = "dm";
  o["��"] = "7b";
  o["��"] = "db";
  o["��"] = "6r";
  o["��"] = "5r";
  o["��"] = "2i";
  o["��"] = "cq";
  o["��"] = "z8";
  o["��"] = "by";
  o["��"] = "b0";
  o["��"] = "o5";
  o["��"] = "x7";
  o["��"] = "oo";
  o["��"] = "5e";
  o["��"] = "vp";
  o["��"] = "bl";
  o["��"] = "uu";
  o["��"] = "bi";
  o["��"] = "hy";
  o["ɧ"] = ",4";
  o["ɩ"] = "5a";
  o["ɬ"] = "sh";
  o["ɮ"] = "4i";
  o["ɳ"] = "5s";
  o["ɴ"] = "ow";
  o["ɸ"] = "0f";
  o["ɼ"] = "e0";
  o["ɽ"] = "ln";
  o["ɾ"] = "ty";
  o["��"] = "5d";
  o["��"] = "qh";
  o["��"] = "6b";
  o["��"] = "kp";
  o["��"] = "nc";
  o["��"] = "nw";
  o["��"] = ",,";
  o["��"] = "a;";
  o["��"] = "dv";
  o["��"] = "y4";
  o["��"] = "sv";
  o["��"] = "tp";
  o["��"] = ".p";
  o["��"] = "m2";
  o["��"] = "xo";
  o["��"] = "qe";
  o["��"] = "j4";
  o["��"] = "uc";
  o["��"] = "qr";
  o["��"] = "8f";
  o["��"] = "y.";
  o["��"] = "7z";
  o["��"] = "ay";
  o["ʡ"] = "vb";
  o["ʣ"] = "5u";
  o["ʧ"] = "x,";
  o["ʩ"] = "9d";
  o["ʪ"] = "ph";
  o["ʬ"] = "hw";
  o["ʰ"] = "5f";
  o["ʸ"] = ";l";
  o["ʹ"] = "tg";
  o["ʻ"] = "b8";
  o["ʼ"] = "xh";
  o["ʿ"] = ".h";
  o["��"] = "5g";
  o["��"] = "f9";
  o["��"] = "u.";
  o["��"] = ",;";
  o["��"] = "ca";
  o["��"] = "au";
  o["��"] = "e9";
  o["��"] = "fm";
  o["��"] = "/p";
  o["��"] = "tb";
  o["��"] = "bp";
  o["��"] = "4p";
  o["��"] = "/5";
  o["��"] = "pe";
  o["��"] = "a8";
  o["��"] = ";1";
  o["��"] = "yq";
  o["��"] = "p,";
  o["��"] = "pp";
  o["��"] = "2p";
  o["��"] = "zt";
  o["��"] = "1o";
  o["��"] = "aq";
  o["��"] = "q5";
  o["��"] = "fk";
  o["��"] = "dw";
  o["��"] = ".s";
  o["ˡ"] = "uy";
  o["ˬ"] = "ex";
  o["˭"] = "gy";
  o["ˮ"] = "h4";
  o["˺"] = "um";
  o["˼"] = "6c";
  o["˽"] = "g8";
  o["˾"] = "fb";
  o["˿"] = "w5";
  o["��"] = "e5";
  o["��"] = "6w";
  o["��"] = "rj";
  o["��"] = "pb";
  o["��"] = "r5";
  o["��"] = "8g";
  o["��"] = "yg";
  o["��"] = "0b";
  o["��"] = ",2";
  o["��"] = "bb";
  o["��"] = "/4";
  o["��"] = "xm";
  o["��"] = ",s";
  o["��"] = "0y";
  o["��"] = "x.";
  o["̣"] = "dk";
  o["̤"] = "eb";
  o["̦"] = "0k";
  o["̩"] = "i5";
  o["̱"] = "ul";
  o["̳"] = "iq";
  o["̴"] = "3l";
  o["̵"] = "yp";
  o["̾"] = "mr";
  o["̿"] = "bk";
  o["��"] = "px";
  o["��"] = "9f";
  o["��"] = "0u";
  o["��"] = "bm";
  o["��"] = "9v";
  o["��"] = ",c";
  o["��"] = ",3";
  o["��"] = "3n";
  o["��"] = "zj";
  o["��"] = "pw";
  o["��"] = ".v";
  o["��"] = "0i";
  o["��"] = "yb";
  o["��"] = "rg";
  o["��"] = "fq";
  o["��"] = "lx";
  o["��"] = "5/";
  o["��"] = "gi";
  o["��"] = ".l";
  o["��"] = "ej";
  o["��"] = "/1";
  o["͢"] = "aj";
  o["ͥ"] = "hp";
  o["ͧ"] = "sz";
  o["ͭ"] = ";h";
  o["ͳ"] = "rw";
  o["ͷ"] = "b.";
  o["͹"] = "e7";
  o["ͺ"] = "ws";
  o["ͻ"] = "rx";
  o["ͼ"] = "0e";
  o["ͽ"] = "sf";
  o[";"] = "7g";
  o["Ϳ"] = "/.";
  o["��"] = "el";
  o["��"] = "bu";
  o["��"] = "s/";
  o["��"] = "ly";
  o["��"] = "kn";
  o["��"] = "0o";
  o["��"] = "vv";
  o["��"] = "hh";
  o["��"] = "7d";
  o["��"] = "zu";
  o["��"] = "t.";
  o["��"] = "1n";
  o["��"] = "qi";
  o["��"] = ",j";
  o["��"] = "3o";
  o["��"] = "5j";
  o["��"] = "vk";
  o["��"] = ".2";
  o["��"] = "y0";
  o["��"] = "et";
  o["��"] = "vo";
  o["��"] = "mx";
  o["΢"] = "cw";
  o["Τ"] = "5i";
  o["Υ"] = "0v";
  o["Φ"] = "u/";
  o["Ψ"] = "vy";
  o["Ω"] = "pr";
  o["ά"] = "i0";
  o["ή"] = "gj";
  o["α"] = "1,";
  o["ε"] = "v8";
  o["ζ"] = "u0";
  o["θ"] = "o0";
  o["ι"] = "cu";
  o["λ"] = "ec";
  o["ξ"] = "ee";
  o["��"] = "bh";
  o["��"] = "ad";
  o["��"] = "0g";
  o["��"] = "bj";
  o["��"] = "be";
  o["��"] = "wl";
  o["��"] = "lj";
  o["��"] = "b7";
  o["��"] = "a9";
  o["��"] = "9w";
  o["��"] = "p0";
  o["��"] = "xr";
  o["��"] = "ap";
  o["��"] = "z.";
  o["��"] = "p.";
  o["��"] = "w6";
  o["��"] = "wv";
  o["��"] = "/q";
  o["��"] = "2,";
  o["��"] = "3m";
  o["��"] = ",i";
  o["Ϣ"] = "hj";
  o["ϩ"] = "rh";
  o["ϫ"] = "di";
  o["ϯ"] = "5n";
  o["Ϸ"] = "5m";
  o["Ϻ"] = "oy";
  o["ϻ"] = "ic";
  o["Ͽ"] = "sn";
  o["��"] = "rr";
  o["��"] = "ot";
  o["��"] = "yk";
  o["��"] = "f8";
  o["��"] = "0j";

  // alternate definitions (optional)
  o = im.encodetable_alt = new Object();
  o["!"] = "te";
  o["%"] = "bz";
  o["("] = "ke";
  o[")"] = "id";
  o["0"] = "kf";
  o["1"] = ";d";
  o["2"] = ";f";
  o["3"] = "ha";
  o["4"] = "ud";
  o["5"] = "ld";
  o["6"] = "if";
  o["7"] = "he";
  o["8"] = "kt";
  o["9"] = "kv";
  o["?"] = "3.";

  // ===================================================================
  // make decodetable

  // im.decodetable = new Object();
  // im.ndefs = 0;
  // for (var kanji in im.encodetable) {
  //   // avoid double definition
  //   if (im.decodetable[im.encodetable[kanji]] != null) {
  //     continue;
  //   }
  //   im.decodetable[im.encodetable[kanji]] = kanji;
  //   im.ndefs += 1;
  // }

  // ===================================================================
  // add entry

  ks.addim(im);
}