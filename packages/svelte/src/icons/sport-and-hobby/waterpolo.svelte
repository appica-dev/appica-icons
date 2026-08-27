<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path fill=\"currentColor\" d=\"M6.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"/><path d=\"m5 8 3 4 4.5 1m0 0 7.5-1m-7.5 1-.5 3m-9 2.75A2.4 2.4 0 0 0 4 19a2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 1-.25M12 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0M6.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"/>";
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
