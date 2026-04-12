import type {BaseLayoutProps} from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
    nav:{
        title:(
            <>
                <img src="/logo.png" alt="Logo" width={30} height={30}/>
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