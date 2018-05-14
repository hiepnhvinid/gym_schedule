'use strict'

const domainAddress = 'http://localhost:3000'
const api = {
  listPlans: '/api/list_plans',
  listWorkout: '/api/list_workout',
  login: '/api/login',
  modifyPassword: '/api/modify_password/',
  plans: '/api/plans/',
  sign_up: '/api/sign_up',
  user: '/api/user/',
  workout: '/api/workout_day/'
}

module.exports = { api, domainAddress }
