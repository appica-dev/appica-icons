<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 10.96A8 8 0 0 1 6.676 5.98 8.05 8.05 0 0 1 11.99 4a8.05 8.05 0 0 1 5.302 2.01 7.974 7.974 0 0 1 1.317 10.49 8.03 8.03 0 0 1-4.642 3.248 8.07 8.07 0 0 1-5.64-.616 8 8 0 0 1-3.825-4.172m-.502 5v-5h5.021\"/>";
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
