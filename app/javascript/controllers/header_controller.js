import { Controller } from '@hotwired/stimulus'
import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  connect() {
    console.log('enter: ', enter);
    console.log('leave: ', leave);
    console.log('toggle: ', toggle);
  }
}
