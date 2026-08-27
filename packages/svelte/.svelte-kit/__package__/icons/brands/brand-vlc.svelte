<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 14H5.571a2 2 0 0 0-1.923 1.45l-.57 2A2 2 0 0 0 5 20h13.998a2 2 0 0 0 1.923-2.55l-.572-2A2 2 0 0 0 18.426 14H17m-3.21-9.663 3.101 9.305c.33.985-.113 2.07-1.02 2.499a9.15 9.15 0 0 1-7.742 0c-.907-.428-1.35-1.514-1.02-2.499l3.1-9.305C10.476 3.537 11.194 3 12 3c.807 0 1.525.537 1.79 1.337\"/>";
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
