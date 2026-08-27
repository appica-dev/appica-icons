<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 5a2 2 0 0 0-2-2H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2m0-16a2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a2 2 0 0 0-2 2m0-16v16M7 7h1m-1 4h1m8-4h1m-1 4h1m-1 4h1\"/>";
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
