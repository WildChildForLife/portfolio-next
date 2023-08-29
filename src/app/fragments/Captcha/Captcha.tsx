import { CaptchaPropsType } from '@/app/types/props';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useTheme } from "next-themes";

const HCaptchaSiteKey = process.env.HCAPTCHA_SITEKEY ?? '';

const Captcha: React.FC<CaptchaPropsType> = ({ setHCaptchaToken }) => {
    const { theme } = useTheme();

    return (
        <HCaptcha
            sitekey={HCaptchaSiteKey}
            onVerify={setHCaptchaToken}
            languageOverride={'en'}
            size="normal"
            theme={theme === 'dark' ? 'dark' : 'light'}
        />
    )
}

export default Captcha;