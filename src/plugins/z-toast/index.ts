import { notification as antNotification } from 'ant-design-vue'

const notification = {
  success: () => {
    antNotification.open({
      message: 'Thành công',
      description: 'Bạn thành công'
    })
  }
}
