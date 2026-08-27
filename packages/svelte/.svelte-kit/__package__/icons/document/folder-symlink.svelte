<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 21v-4a3 3 0 0 1 3-3h5m0 0-3 3m3-3-3-3m-5 0V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8\"/>";
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
