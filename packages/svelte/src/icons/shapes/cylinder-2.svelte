<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 5.5C20 7.433 16.418 9 12 9S4 7.433 4 5.5m16 0C20 3.567 16.418 2 12 2S4 3.567 4 5.5m16 0v13M4 5.5v13m16 0c0 1.933-3.582 3.5-8 3.5s-8-1.567-8-3.5m16 0c0-1.933-3.582-3.5-8-3.5s-8 1.567-8 3.5\"/>";
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
