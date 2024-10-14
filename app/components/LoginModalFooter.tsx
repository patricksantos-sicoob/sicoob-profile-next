interface LoginModalFooterProps {
  actionText: string;
}

const LoginModalFooter = ({ actionText }: LoginModalFooterProps) => {
  <div>
    {actionText === "login" && (
      <p>
        Esqueceu sua senha? <a href="/login/redefinir">Clique para redefinir</a>
      </p>
    )}
    {actionText === "login" && (
      <p>
        Primeira vez por aqui? <a href="/login/cadastro">Crie sua conta!</a>
      </p>
    )}
    {actionText === "cadastro" && (
      <p>
        Já possui uma conta? <a href="/login">Clique para entrar!</a>
      </p>
    )}
  </div>;
};

export default LoginModalFooter