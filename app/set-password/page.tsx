import SetPasswordForm from "./form";

export default function SetPasswordPage() {
  return <main className="loginPage"><section className="loginCard"><img src="/assets/logo.png" alt="Crunch & Crumbs"/><p className="eyebrow">MERCHANT ACCOUNT</p><h1>Create your password</h1><p>Choose a secure password for your personal merchant dashboard account.</p><SetPasswordForm/></section></main>;
}
