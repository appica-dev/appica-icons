<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m15.464 14 3-5.196M5.536 15.195l3-5.196M12 12h.01M9 9 3 3m0 0v4m0-4h4M5.5 8.5l3-3M21 21l-6-6m2 5 3-3m-10-1.536a4 4 0 1 0 4.046-6.902A4 4 0 0 0 10 15.464\"/>";
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
