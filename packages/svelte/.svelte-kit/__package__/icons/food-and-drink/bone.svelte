<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 3a3 3 0 0 1 3 3 3 3 0 1 1-2.12 5.122L11.12 15.88a3 3 0 1 1-5.117 2.297V18h-.176a3 3 0 1 1 2.298-5.115l4.758-4.758a3 3 0 0 1 2.12-5.122z\"/>";
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
