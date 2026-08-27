<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 8.866 9.267 6.132A3.866 3.866 0 0 0 3.8 11.599l2.733 2.734m0 0L12 19.8l8.202-8.201a3.865 3.865 0 1 0-5.47-5.466z\"/>";
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
