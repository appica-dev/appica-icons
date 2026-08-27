<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 21h8m-4-6v6m0-6a7 7 0 0 1-7-7c0-1.5.138-2.75.75-3.5M12 15a7 7 0 0 0 7-7c0-1.5-.094-2.75-.75-3.5M5.5 5c0 .53.685 1.04 1.904 1.414C8.623 6.79 10.276 7 12 7s3.377-.21 4.596-.586C17.816 6.04 18.5 5.53 18.5 5s-.685-1.04-1.904-1.414C15.377 3.21 13.724 3 12 3s-3.377.21-4.596.586C6.184 3.96 5.5 4.47 5.5 5\"/>";
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
