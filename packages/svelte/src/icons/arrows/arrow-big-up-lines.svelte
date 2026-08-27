<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.034 20.5h5.932m-5.932-2.985h5.932m-5.932-5.971H5.488a.98.98 0 0 1-.913-.614 1 1 0 0 1 .214-1.085l6.512-6.554a.985.985 0 0 1 1.398 0l6.512 6.554a.996.996 0 0 1-.7 1.699h-3.545v2.985H9.034z\"/>";
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
