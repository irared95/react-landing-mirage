import React from 'react'
import './subscribe.scss'
import Typography from '../../components/Typography';
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import { useForm } from "react-hook-form";

const Subscribe = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));

    return (
        <section className={'subscribe'}>
          <div className={'container'}>
              <div className={'subscribe__wrap'}>
                  <div className={'subscribe__wrapper'}>
                      <div className={'subscribe__title'}>
                          <Typography variant={'title3'} textAlign={'center'}>Subscribe To Our Blog</Typography>
                      </div>
                      <div className={'subscribe__text'}>
                          <Typography variant={'text'} textAlign={'center'}>A newsletter is a tool used to communicate regularly with
                              your subscribers, delivering the information</Typography>
                      </div>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className={'subscribe__former'}>
                      <div className={'subscribe__form'}>
                          <Icon icon={'mail'} width={'25px'} height={'25px'}/>
                          <input type="text" placeholder={'Type Your Email Address'} className={'subscribe__input'} {...register("email", { required: true })} />
                          <Button variant={'contained'} icon={'arrow'} iconWidth={'25px'} iconHeight={'25px'}>Send now</Button>
                      </div>
                      <div className="subscribe__errors">
                          {errors?.email && <Typography variant={'error'}>Email is required!!!</Typography>}
                      </div>
                  </form>
              </div>
          </div>
        </section>
    )
}

export default Subscribe