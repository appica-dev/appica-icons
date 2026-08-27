<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.024 9.61l-.949-4.18a2 2 0 0 1 .393-1.682 2 2 0 0 1 .693-.551c.269-.129.564-.197.863-.197h7.994a2 2 0 0 1 1.59.728 2 2 0 0 1 .4.804c.071.295.074.602.008.898l-.999 4.2m-7.994 7.371h5.995m3.877 3.059c.949-1.604 1.303-3.491.999-5.33a8 8 0 0 0-3.82-5.659 7.99 7.99 0 0 0-6.794-.646c-1.11.401-2.117 1.042-2.95 1.879a8 8 0 0 0-1.866 2.959c-.396 1.112-.541 2.298-.425 3.473s.491 2.31 1.097 3.323a2 2 0 0 0 1.709.94h10.352a2 2 0 0 0 1.699-.94z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
