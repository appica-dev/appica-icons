<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-5.5 8.28\"/>";
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
