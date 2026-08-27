<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 10.96a8 8 0 0 0-2.676-4.981A8.05 8.05 0 0 0 12.01 4a8.05 8.05 0 0 0-5.302 2.01A7.974 7.974 0 0 0 5.391 16.5a8.03 8.03 0 0 0 4.642 3.248 8.07 8.07 0 0 0 5.64-.616 8 8 0 0 0 3.825-4.172m.502 5v-5h-5.021\"/>";
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
