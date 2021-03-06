import { ActionTree } from 'vuex'
import { Activity, ActivityState } from './types'
import { RootState } from '@/types'

export const actions: ActionTree<ActivityState, RootState> = {
  setListActivities (context: any, data: Activity): any {
    context.commit('listActivities', data)
  },

  setDeleteActivity (context: any, data: string): string {
    return context.commit('deleteActivity', data)
  },

  setLikeActivity (context: any, data: string): string {
    return context.commit('likeActivity', data)
  },

  setUnlikeActivity (context: any, data: string): string {
    return context.commit('unlikeActivity', data)
  },

  setAddComment (context: any, data: string): string {
    return context.commit('addComment', data)
  },

  setDeleteComment (context: any, data: string): string {
    return context.commit('deleteComment', data)
  },

  setUpdateComment (context: any, data: string): string {
    return context.commit('updateComment', data)
  },

  setLikeComment (context: any, data: string): string {
    return context.commit('likeComment', data)
  },

  setUnlikeComment (context: any, data: string): string {
    return context.commit('unlikeComment', data)
  }
}
