<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.824 12a3.176 3.176 0 1 0 6.352 0 3.176 3.176 0 0 0-6.352 0M5.647 5.647h3.706L12 3l2.647 2.647h3.706v3.706L21 12l-2.647 2.647v3.706h-3.706L12 21l-2.647-2.647H5.647v-3.706L3 12l2.647-2.647z\"/>";
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
