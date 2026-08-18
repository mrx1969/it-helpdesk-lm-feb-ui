import{c as k,t as c,s,v as l}from"./index-BH4geOCt.js";import{u as y,j as g}from"./Layout-rbqLXRGY.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=k("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]),f=a=>y({queryKey:["rkat-realisasi-all",a],queryFn:async()=>{let e=s.from("rkat_realisasi").select(`
          *,
          rkat_budgets!inner (
            kode_kegiatan,
            coa,
            nama_kegiatan,
            tahun
          )
        `).order("tanggal_pengajuan",{ascending:!1});a&&(e=e.eq("rkat_budgets.tahun",a));const{data:r,error:t}=await e;if(t)throw t;return r}}),q=()=>{const a=c();return g({mutationFn:async e=>{const{error:r}=await s.from("rkat_realisasi").insert({budget_id:e.budget_id,tanggal_pengajuan:e.tanggal_pengajuan,deskripsi:e.deskripsi,jumlah:e.jumlah});if(r)throw r;const{data:t,error:i}=await s.from("rkat_budgets").select("realisasi").eq("id",e.budget_id).single();if(i)throw i;const u=Number(t.realisasi)+e.jumlah,{error:n}=await s.from("rkat_budgets").update({realisasi:u}).eq("id",e.budget_id);if(n)throw n;return{success:!0}},onSuccess:()=>{a.invalidateQueries({queryKey:["rkat-budgets"]}),a.invalidateQueries({queryKey:["rkat-realisasi"]}),a.invalidateQueries({queryKey:["rkat-realisasi-all"]}),l.success("Realisasi berhasil ditambahkan")},onError:e=>{l.error("Gagal menambahkan realisasi: "+e.message)}})},_=()=>{const a=c();return g({mutationFn:async({id:e,budget_id:r,jumlah:t})=>{const{data:i,error:u}=await s.from("rkat_budgets").select("realisasi").eq("id",r).single();if(u)throw u;const n=Math.max(0,Number(i.realisasi)-t),{error:o}=await s.from("rkat_budgets").update({realisasi:n}).eq("id",r);if(o)throw o;const{error:d}=await s.from("rkat_realisasi").delete().eq("id",e);if(d)throw d;return{success:!0}},onSuccess:()=>{a.invalidateQueries({queryKey:["rkat-budgets"]}),a.invalidateQueries({queryKey:["rkat-realisasi"]}),a.invalidateQueries({queryKey:["rkat-realisasi-all"]}),l.success("Realisasi berhasil dihapus")},onError:e=>{l.error("Gagal menghapus realisasi: "+e.message)}})};export{b as R,f as a,_ as b,q as u};
