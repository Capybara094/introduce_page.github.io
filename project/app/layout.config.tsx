import type {BaseLayoutProps} from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
    nav:{
        title:(
            <>
                <img src="/shape.png" alt="Logo" width={24} height={24}/>
                GO2 PRO
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