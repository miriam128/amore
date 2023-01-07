import{u as p,j as a,a as e,H as h}from"./app-da48f46b.js";import{A as f}from"./AuthenticatedLayout-45742696.js";import{I as t}from"./TextInput-732b80e9.js";import{P as y}from"./PrimaryButton-7b7059cf.js";import{I as l}from"./InputLabel-e00ce344.js";import"./ApplicationLogo-a107125a.js";import"./transition-6cea7b7e.js";function C({auth:i,convidados:n}){const{data:d,setData:s,post:u,processing:c,reset:m,errors:o}=p({nome:"",email:"",total_pessoas:""});function g(r){r.preventDefault(),u(route("convidados.store"),{onSuccess:()=>m()})}return a(f,{auth:i,children:[e(h,{title:"Convidados"}),e("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:a("form",{onSubmit:g,children:[a("div",{children:[e(l,{forInput:"nome-convidado",value:"Nome do convidado"}),e("input",{type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0,onChange:r=>s("nome",r.target.value),value:d.nome}),e(t,{message:o.nome,className:"mt-2"})]}),a("div",{children:[e(l,{forInput:"email-convidado",value:"Email do convidado"}),e("input",{type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0,onChange:r=>s("email",r.target.value),value:d.email}),e(t,{message:o.email,className:"mt-2"})]}),a("div",{children:[e(l,{forInput:"total-pessoas-convidado",value:"Total de pessoas"}),e("input",{type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0,onChange:r=>s("total_pessoas",r.target.value),value:d.total_pessoas}),e(t,{message:o.total_pessoas,className:"mt-2"})]}),e(t,{message:o.message,className:"mt-2"}),e(y,{className:"mt-4",processing:c,children:"Adicionar convidado"})]})}),a("table",{children:[e("thead",{children:a("tr",{children:[e("th",{children:"Nome"}),e("th",{children:"E-mail"}),e("th",{children:"Total Pessoas"})]})}),e("tbody",{children:n.map((r,b)=>a("tr",{children:[e("td",{children:r.nome}),e("td",{children:r.email}),e("td",{children:r.total_pessoas})]},b))})]})]})}export{C as default};
