<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.5 10.625 3 7.812 7.5 5 12 7.813 16.5 5 21 7.791l-4.5 2.812L12 7.812zm0 0L3 13.448l4.5 2.802m0-5.625 4.5 2.823M7.5 16.25l4.5-2.801M7.5 16.25v1.124l4.5 2.627 4.5-2.627v-1.123M12 13.449l4.5-2.823 4.5 2.823-4.5 2.802M12 13.449l4.5 2.802\"/>";
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
