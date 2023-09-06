import { motion } from "framer-motion";
import Icon from "../Icon/Icon";
import { InfoPropsType } from "@/app/types/props/InfoPropsType";

const Info: React.FC<InfoPropsType> = ({ status, message }) => {
    return (
        <motion.p
            className={`${status} info`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {message}
            {(status === 'success') ?
                <Icon type="ai" code="AiOutlineCheckCircle"></Icon> :
                <Icon type="vsc" code="VscError"></Icon>
            }
        </motion.p>
    )
}

export default Info;