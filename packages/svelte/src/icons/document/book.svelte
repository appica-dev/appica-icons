<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 19a9.1 9.1 0 0 0-4.5-1.188c-1.58 0-3.132.41-4.5 1.188V6.188A9.1 9.1 0 0 1 7.5 5c1.58 0 3.132.41 4.5 1.188M12 19a9.1 9.1 0 0 1 4.5-1.188c1.58 0 3.132.41 4.5 1.188V6.188A9.1 9.1 0 0 0 16.5 5c-1.58 0-3.132.41-4.5 1.188M12 19V6.188\"/>";
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
