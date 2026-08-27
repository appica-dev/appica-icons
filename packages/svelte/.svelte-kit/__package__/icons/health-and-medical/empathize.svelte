<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.5 5.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M12 21.368l5.095-5.096a3.089 3.089 0 1 0-4.367-4.367l-.728.727-.728-.727a3.09 3.09 0 0 0-5.286 2.18 3.09 3.09 0 0 0 .919 2.187z\"/>";
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
