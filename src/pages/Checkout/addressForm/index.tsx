import { useFormContext } from 'react-hook-form'
import { Input } from './styles'

export function AddressForm() {
  const { register } = useFormContext()
  return (
    <>
      <Input type="text" id="cep" placeholder="CEP" {...register('cep')} />
      <Input
        $width="100%"
        type="text"
        id="rua"
        placeholder="Rua"
        {...register('rua')}
      />
      <div>
        <Input type="text" placeholder="Número" id="numero" />
        <Input
          $width="70%"
          type="text"
          placeholder="Complemento"
          id="complemento"
          {...register('complemento')}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Bairro"
          id="bairro"
          {...register('bairro')}
        />
        <Input
          $width="60%"
          type="text"
          placeholder="Cidade"
          id="cidade"
          {...register('cidade')}
        />
        <Input
          $width="10%"
          type="text"
          placeholder="UF"
          id="uf"
          {...register('uf')}
        />
      </div>
    </>
  )
}
