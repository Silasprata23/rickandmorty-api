
import logoGithub from '../../assets/images/LogoGitHub.svg'
import './style.css'
export const Header = () => {
    return (
        <header>
            <div className="headerWrapper">
                <a href="https://github.com/Silasprata23">
                    <span>SilasPrata</span>
                    <img src={logoGithub} alt="logo Github" />
                </a>
            </div>
        </header>

    )
}
