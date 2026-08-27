<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 9v13M4.3 3.3l6.655 5.186a1.7 1.7 0 0 0 2.09 0L19.7 3.3M19 17.17l-5.98 4.485a1.7 1.7 0 0 1-2.04 0L5 17.17a2.5 2.5 0 0 1-1-2V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11.17a2.5 2.5 0 0 1-1 2\"/>";
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
