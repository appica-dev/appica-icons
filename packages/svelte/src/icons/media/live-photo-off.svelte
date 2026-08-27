<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.296 11.285A1 1 0 1 0 12.71 12.7M8.473 8.453a4.997 4.997 0 0 0 5.454 8.156 5 5 0 0 0 1.622-1.094m1.365-2.59a4.994 4.994 0 0 0-3.413-5.698 5 5 0 0 0-2.394-.15M15.9 20.102v.01m3.14-2.51v.01m1.73-3.617v.01m0-4.008v.01m-1.73-3.618v.01M15.9 3.89v.01M12 3v.01m-3.9.88v.01M4.96 6.388v.01M3.23 9.996v.01m0 3.988v.01m1.73 3.598v.01M8.1 20.1v.01m3.9.879V21M3 3l18 17.99\"/>";
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
