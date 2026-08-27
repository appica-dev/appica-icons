<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 11v4c0 1.1-.657.997-1.6.997a2.35 2.35 0 0 1-1.697-.731A2.55 2.55 0 0 1 11 13.499c0-.663.253-1.299.703-1.767A2.35 2.35 0 0 1 13.4 11zm0 0V8M8 8v8m-5-4c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12\"/>";
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
