<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 12h3a6 6 0 0 0 6-6V5h-3a6 6 0 0 0-6 6H9a6 6 0 0 1-6-6V3h3a6 6 0 0 1 6 6v6m-5 0h10v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z\"/>";
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
