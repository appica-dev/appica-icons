<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.495 3.02a9 9 0 0 1-9.475 9.475m17.96-.99a9 9 0 0 0-9.475 9.475M9 9l2 2m2 2 2 2m-4-8 2 1m-6 3 1 2m8-2 1 2m-6 3 2 1m-7.364 1.364a9 9 0 1 0 12.729-12.73 9 9 0 0 0-12.729 12.73\"/>";
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
