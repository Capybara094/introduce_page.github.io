import type {BaseLayoutProps} from 'fumadocs-ui/layouts/shared';

import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
    nav:{
        title:(
            <>
                <Image src="/logo.png" alt="Logo" width={30} height={30} />
                PawAI
            </>
        ),
    },
    links:[
        {
            text: "Documentation",
            url:"/docs",
            active:"nested-url",
        },
    ],
};