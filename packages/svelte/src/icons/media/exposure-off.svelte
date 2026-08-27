<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3.6 20.4 8.371-8.371m2.04-2.04L20.4 3.6M6 8h2v2m6 6h2M7 3h12a2 2 0 0 1 2 2v12m-.5 3.5c-.362.36-.95.5-1.5.5H5a2 2 0 0 1-2-2V5c0-.541.215-1.033.565-1.393M3 3l18 18\"/>";
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
