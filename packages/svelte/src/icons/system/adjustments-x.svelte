<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 12a2 2 0 1 1 0-4m0 4a2 2 0 1 0 0-4m0 4v8M6 8V4m7.653 10.874a2 2 0 1 0-.586 2.818M12 4v10m0 4v2m6-11a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 4v4m0-8V4m4 18-5-5m0 5 5-5\"/>";
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
