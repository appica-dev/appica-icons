<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path fill=\"currentColor\" d=\"M11.5 7.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M11.5 16.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0\"/><path d=\"M12 21a9 9 0 0 1 0-18m0 18a9 9 0 0 0 0-18m0 18a4.5 4.5 0 1 0 0-9 4.5 4.5 0 1 1 0-9m-.5 4.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m0 9a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0\"/>";
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
