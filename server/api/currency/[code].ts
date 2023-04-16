export default defineEventHandler(async (event) => {
  //Grabbing the params code in the url
  //@ts-ignore
  const { code } = event.context.params;
  //Getting the runtimeConfig that can be found on nuxt.config.file
  const { currencyKey } = useRuntimeConfig();
  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

  const { data } = (await $fetch(uri)) as any;
  return data;
});
