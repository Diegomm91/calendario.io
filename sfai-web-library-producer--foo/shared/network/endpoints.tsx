import { currentHost } from '../globals';

export function buildAbsURL(endpoint: string): string {
    return `${currentHost()}${endpoint}`;
}

const SFAI_WEB_ENDPOINTS = {
    HOME: {
        THIS: '/',
        PRIVACY_POLICY: '/privacy-policy',
        TERMS_AND_CONDITIONS: '/terms-and-conditions',
    },
    MARKETING: {
    },
    PRESALE: {
        WHAT_IS: '/presale/what-is'
    },
    ECOSYSTEM: {
        THIS: '/ecosystem/what-is'
    },
    PARK: {
        WHAT_IS: '/park/what-is'
    },
    SALES: {
        THIS: '/sales',
        APPOINTMENTS: '/sales/appointments'
    },
    SOLUTIONS: {
        WHAT_ARE: '/solutions/what-are',
        BY_USE_CASE: {
            THIS: '/solutions/by-use-case',
            CHAT_SFAI: '/solutions/chat-sfai',
            PROPS_SECURITY: '/solutions/props-security'
        },
        BY_INDUSTRY: '/solutions/by-industry',
        BY_ORGANIZATION: '/solutions/by-organization',
        BY_LIBRARY: '/solutions/by-library'
    },
    SERVICES: {
        WHAT_ARE: '/services/what-are',
        CONSULTING: '/services/consulting',
        DEVELOPMENT: '/services/development',
        INTEGRATION: '/services/integration',
        TRAINING: '/services/training',
        SUPPORT: '/services/support',
        AUDIT: '/services/audit'
    },
    PRODUCTS: {
        WHAT_ARE: '/products/what-are',
        APPS: '/products/apps',
        TOOLS: '/products/tools',
        LIBRARIES: '/products/libraries',
        FRAMEWORKS: '/products/frameworks',
        PLATFORMS: '/products/platforms'
    },
    COMPANY: {
        ABOUT_SFAI: '/company/about-sfai',
        TALENTS_APPLY: {
            THIS: '/company/talents_apply',
            SELLER: '/company/talents_apply/seller',
            DEVELOPER: '/company/talents_apply/developer'
        },
        OUR_AI_TEAM: '/company/our-ai-team',
        NEWS: '/news'
    },
    CONTACT: {
        THIS: '/contact-us',
        SALES: '/contact-us/sales'
    },
    ACCESS_CODE: {
        SHORT: 'access',
        DEMO_ACCESS: '/demo/access'
    },
    DEMO: {
        THIS: '/demo',
        THIS_ALL: 'demo/*',
        MARKETING: {
            SHORT: 'platform-marketing',
            FULL: '/demo/platform-marketing'
        },
        SALES: {
            SHORT: 'platform-sales',
            FULL: '/demo/platform-sales'
        }
    },
    IAM: {
        SIGN_UP: {
            THIS: '/signup'
        },
        LOGIN: {
            THIS: '/login'
        }
    },
    RESOURCES: {
        BLOG: {
            THIS: '/blog',
            THIS_ALL: 'blog/*'
        },
        CASE_STUDIES: '/resources/case-studies',
        WHITE_PAPERS: {
            THIS: '/resources/whitepapers',
        }
    },
    ALLIES: {

    }
};

export default SFAI_WEB_ENDPOINTS;
