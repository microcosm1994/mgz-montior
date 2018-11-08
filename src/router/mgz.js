import mgz from '@/components/_/mgz'
import mgz_app_get from '@/components/mgz/app/get'
import mgz_macro_get from '@/components/mgz/macro/get'
import mgz_equip_get from '@/components/mgz/equip/get'
import mgz_macroFileDefault_get from '@/components/mgz/macroFileDefault/get'
import mgz_workWay_get from '@/components/mgz/workWay/get'
import mgz_appFile_get from '@/components/mgz/appFile/get'
import mgz_macroFile_get from '@/components/mgz/macroFile/get'
import mgz_equipLog_get from '@/components/mgz/equipLog/get'
import mgz_logInboundRateStatistics_get from '@/components/mgz/logInboundRateStatistics/get'

export default {
	path: '/mgz',
    name: 'mgz',
    component: mgz,
    redirect: { name: 'mgz_app_get' },
    children:[
		{
		    path: '/mgz/app/get',
		    name: 'mgz_app_get',
		    component: mgz_app_get
		},
		{
		    path: '/mgz/macro/get',
		    name: 'mgz_macro_get',
		    component: mgz_macro_get
		},
		{
		    path: '/mgz/equip/get',
		    name: 'mgz_equip_get',
		    component: mgz_equip_get
		},
		{
		    path: '/mgz/macroFileDefault/get',
		    name: 'mgz_macroFileDefault_get',
		    component: mgz_macroFileDefault_get
		},
		{
		    path: '/mgz/workWay/get',
		    name: 'mgz_workWay_get',
		    component: mgz_workWay_get
		},
		{
		    path: '/mgz/appFile/get',
		    name: 'mgz_appFile_get',
		    component: mgz_appFile_get
		},
		{
		    path: '/mgz/macroFile/get',
		    name: 'mgz_macroFile_get',
		    component: mgz_macroFile_get
		},
		{
		    path: '/mgz/equipLog/get',
		    name: 'mgz_equipLog_get',
		    component: mgz_equipLog_get
		},
		{
		    path: '/mgz/logInboundRateStatistics/get',
		    name: 'mgz_logInboundRateStatistics_get',
		    component: mgz_logInboundRateStatistics_get
		}
	]
}