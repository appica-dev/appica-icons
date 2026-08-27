<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.588 15.537 12.035 12l-7.742 8.18c-.79.85.153 2.18 1.238 1.73l9.616-4.096a1.398 1.398 0 0 0 .44-2.277M8.412 8.464 11.965 12l7.742-8.18c.791-.85-.153-2.18-1.238-1.73L8.853 6.188a1.398 1.398 0 0 0-.44 2.277z\"/>";
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
